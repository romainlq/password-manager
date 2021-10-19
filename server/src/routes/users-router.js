const Router = require("@koa/router");
const controller = require("../controllers/").users;
const router = new Router();

router.post("/users/login", controller.login);

router.get("/user", controller.get);

module.exports = router.routes();
