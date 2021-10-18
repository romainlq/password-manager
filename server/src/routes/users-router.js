const Router = require("@koa/router");
const controller = require("../controllers/").users;
const router = new Router();

const auth = require("../middleware/auth-required-middleware");

router.post("/users/login", controller.login);
router.post("/users", controller.post);

router.get("/user", auth, controller.get);

module.exports = router.routes();
