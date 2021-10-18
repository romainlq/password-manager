const jwt = require("jsonwebtoken");
const _ = require("lodash");

function generateJWTforUser(user = {}) {
  return Object.assign({}, user, {
    token: jwt.sign(
      {
        sub: _.pick(user, ["id", "username"]),
      },
      "mySecret",
      {
        expiresIn: "1d",
      }
    ),
  });
}

exports.generateJWTforUser = generateJWTforUser;
