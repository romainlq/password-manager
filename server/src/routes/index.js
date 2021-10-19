const Router = require("@koa/router");

const router = new Router();
const api = new Router();

const users = require("./users-router");
const passwords = require("./passwords-router");

api.use(users);
api.use(passwords);

router.use("/api", api.routes());

module.exports = router;
