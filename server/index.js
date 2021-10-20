const Koa = require("koa");
const session = require("koa-session");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const routes = require("./src/routes");
const passport = require("koa-passport");
const logger = require("koa-logger");

const app = new Koa();
app.use(logger());
const PORT = process.env.PORT || 3001;

require("./src/schemas")(app);

// Cors

const whitelist = [
  "https://password-manager-romainlq1.vercel.app",
  "http://localhost:3000",
];

const checkOriginAgainstWhitelist = (ctx) => {
  const requestOrigin = ctx.accept.headers.origin;
  if (!whitelist.includes(requestOrigin)) {
    return ctx.throw(`🙈 ${requestOrigin} is not a valid origin`);
  }
  return requestOrigin;
};

const corsOptions = {
  origin: checkOriginAgainstWhitelist,
  exposeHeaders: ["Authorization"],
  credentials: true,
  allowMethods: ["GET", "PUT", "POST", "DELETE"],
  allowHeaders: ["Authorization", "Content-Type"],
  keepHeadersOnError: true,
};

app.use(cors(corsOptions));

// Sessions
app.keys = ["init key"];
app.use(session(app));

// Bodyparser
app.use(
  bodyParser({
    enableTypes: ["json"],
  })
);

// Authentication
require("./src/auth");
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(routes.routes());
app.use(routes.allowedMethods());

// Server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
