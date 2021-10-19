const Router = require("@koa/router");
const controller = require("../controllers/").passwords;
const router = new Router();

router.post("/passwords", controller.post);
router.get("/passwords", controller.get);

module.exports = router.routes();
