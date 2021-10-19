const bcrypt = require("bcrypt");
const uuid = require("uuid");

module.exports = {
  async get(ctx) {},

  async post(ctx) {
    const { body } = ctx.request;
    let { password = {} } = body;
    const opts = { abortEarly: false };

    user.id = uuid.v4();

    password = await ctx.app.schemas.password.validate(password, opts);
    // password.password = await bcrypt.hash(password.password, 10);
    await db.insert(humps.decamelizeKeys(password));

    ctx.body = { password };
  },
};
