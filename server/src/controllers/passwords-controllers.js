const db = require("../lib/db");
const humps = require("humps");

module.exports = {
  async get(ctx) {
    const { user } = ctx.state;
    const passwords = await db("passwords").where({ user_id: user.id });
    ctx.body = { passwords: humps.camelizeKeys(passwords) };
  },

  async post(ctx) {
    const { body } = ctx.request;
    const opts = { abortEarly: false };
    const password = await ctx.app.schemas.password.validate(body, opts);
    password.userId = ctx.state.user.id;
    await db("passwords").insert(humps.decamelizeKeys(password));

    ctx.body = { password };
  },

  async put(ctx) {
    const { body } = ctx.request;
    console.log(body);
  },

  async delete(ctx) {
    const { id } = ctx.params;
    await db("passwords").where({ id }).del();
    ctx.body = {};
  },
};
