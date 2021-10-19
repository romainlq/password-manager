const yup = require("yup");

const userSchema = yup
  .object()
  .shape({
    id: yup.string(),
    username: yup.string().required().trim(),
    password: yup.string().required().min(8).max(32),
  })
  .noUnknown();

module.exports = userSchema;
