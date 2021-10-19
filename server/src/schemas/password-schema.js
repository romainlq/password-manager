const yup = require("yup");

const passwordSchema = yup
  .object()
  .shape({
    id: yup.string(),
    domainName: yup.string().required().trim(),
    password: yup.string().required().min(6).max(128),
    email: yup.string().email().trim(),
    username: yup.string().trim(),
    userId: yup.string(),
  })
  .noUnknown();

module.exports = passwordSchema;
