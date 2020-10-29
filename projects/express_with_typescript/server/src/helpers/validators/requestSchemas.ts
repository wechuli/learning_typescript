import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const taskSchema = Joi.object({
  title:Joi.string().required(),
  description:Joi.string().required(),
  start_date:Joi.date().required(),
  completion_date:Joi.date().required()
})
