const Koa = require("koa");
const session = require("koa-session");
const cors = require("@koa/cors");

const Router = require("@koa/router");

const app = new Koa();
app.keys = ["init key"];

require("./src/schemas")(app);
const bodyParser = require("koa-bodyparser");
const routes = require("./src/routes");

app.use(
  bodyParser({
    enableTypes: ["json"],
  })
);

const corsOptions = {
  origin: "*",
  exposeHeaders: ["Authorization"],
  credentials: true,
  allowMethods: ["GET", "PUT", "POST", "DELETE"],
  allowHeaders: ["Authorization", "Content-Type"],
  keepHeadersOnError: true,
};

app.use(cors(corsOptions));

app.use(session(app));

app.use(routes.routes());
app.use(routes.allowedMethods());

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
