const _ = require("lodash");
const bcrypt = require("bcrypt");
const humps = require("humps");
const uuid = require("uuid");
const db = require("../lib/db");

const { generateJWTforUser } = require("../lib/utils");
const { ValidationError } = require("../lib/errors");

module.exports = {
  async get(ctx) {
    console.log("dans le get");
    console.log(ctx.state.user);
    const user = generateJWTforUser(ctx.state.user);
    ctx.body = { user };
  },

  async post(ctx) {
    const { body } = ctx.request;
    let { user = {} } = body;
    const opts = { abortEarly: false };

    user.id = uuid.v4();

    user = await ctx.app.schemas.user.validate(user, opts);

    user.password = await bcrypt.hash(user.password, 10);

    await db.insert(humps.decamelizeKeys(user));

    user = generateJWTforUser(user);

    ctx.body = { user: _.omit(user, ["password"]) };
  },

  async login(ctx) {
    const { body } = ctx.request;

    ctx.assert(
      _.isObject(body) && body.username && body.password,
      422,
      new ValidationError(["malformed request"], "", "email or password")
    );

    let user = await db("users").first().where({ username: body.username });

    ctx.assert(
      user,
      401,
      new ValidationError(["is invalid"], "", "username or password")
    );

    const isPasswordValid = await bcrypt.compare(body.password, user.password);

    ctx.assert(
      isPasswordValid,
      401,
      new ValidationError(["is invalid"], "", "email or password")
    );

    user = generateJWTforUser(user);
    ctx.status = 200;
    ctx.cookies.set("token", user.token);

    ctx.body = { user: _.omit(user, ["password"]) };
  },
};
