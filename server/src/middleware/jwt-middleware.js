const koaJwt = require("koa-jwt");

module.exports = koaJwt({
  // getToken(ctx) {
  //   const { authorization } = ctx.headers;

  //   if (authorization && authorization.split(" ")[0] === "Bearer") {
  //     return authorization.split(" ")[1];
  //   }
  //   if (authorization && authorization.split(" ")[0] === "Token") {
  //     return authorization.split(" ")[1];
  //   }
  //   return null;
  // },
  secret: "mySecret",
  // passthrough: true,
  // key: "jwt",
});
