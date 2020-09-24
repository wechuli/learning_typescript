import { Request, Response, NextFunction } from "express";
import { loginSchema } from "./requestValidators";

try {
  let value = loginSchema.validateAsync({ name: "sdd", asa: 90 });
  console.log(value);
} catch (error) {
  console.log(error);
}

// setTimeout(() => {
//   console.log("dd");
// }, 1000);
