import Joi, { ObjectSchema } from "joi";

export const loginSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
});

let value = loginSchema.validate({}, { abortEarly: false });
console.log(value.error?.details);
