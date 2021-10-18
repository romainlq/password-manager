const { ValidationError } = require("yup");
const http = require("http");

class AuthenticationError extends Error {
  constructor(message = http.STATUS_CODES[401]) {
    super(message);
    this.message = message;
    this.statusCode = 401;

    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  AuthenticationError,
  ValidationError,
};
