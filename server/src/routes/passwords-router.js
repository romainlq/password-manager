const Router = require("@koa/router");
const controller = require("../controllers/").passwords;
const router = new Router();

router.post("/passwords", controller.post);
router.get("/passwords", controller.get);
router.delete("/passwords/:id", controller.delete);

module.exports = router.routes();
