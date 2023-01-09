import Joi from "joi";

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validateUser = validator(userSchema);
export default validateUser;
