import { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";

export function requestValidator(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    let validateResult = schema.validate(req.body, { abortEarly: false });
    if (validateResult.error?.details) {
      const errors = validateResult.error?.details;
      const errorObj = errors.map((error) => {
        return {
          message: error.message,
          type: error.type,
        };
      });
      return res.status(400).json({ error: true, errors: errorObj });
    }
    next();
  };
}
