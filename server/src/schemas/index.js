const user = require("./user-schema");
const password = require("./password-schema");

module.exports = function (app) {
  app.schemas = {
    user,
    password,
  };
};
