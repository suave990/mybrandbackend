import Joi from "joi";

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const blogSchema = Joi.object({
  title: Joi.string().min(0).max(40).required(),
  content: Joi.string().min(1).required(),
  image: Joi.string().required(),
});

const validateBlogPost = validator(blogSchema);
export default validateBlogPost;
