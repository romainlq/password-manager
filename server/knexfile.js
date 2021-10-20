require("./src/lib/bootstrap");

const options = {
  client: "pg",
  connection:
    "postgres://gdgtotfk:4M1FCbZOX6hSWHcBGA6sIs4C7pmlnvit@manny.db.elephantsql.com/gdgtotfk",
  pool: {
    min: 0,
    max: 4,
  },
  migrations: {
    directory: "src/db/migrations",
  },
  seeds: {
    directory: "src/db/seeds",
  },
};

const configs = {
  development: Object.assign({}, options),
  production: Object.assign({}, options),
};
Object.assign(configs, configs[process.env.NODE_ENV]);

module.exports = configs;
