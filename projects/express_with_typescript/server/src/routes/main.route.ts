import { Router, Request, Response } from "express";
import { loginSchema, taskSchema } from "../helpers/validators/requestSchemas";
import { requestValidator } from "../helpers/validators/requestValidators";
import { IUser } from "../db/models/User";
import { ITask } from "../db/models/Task";

const router = Router();

router.get(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      return res.status(200).json({ error: false, message: "successful" });
    } catch (error) {
      return res.status(500).json({ error: true, message: "unsuccessful" });
    }
  }
);

router.post(
  "/login",
  requestValidator(loginSchema),
  async (req: Request, res: Response): Promise<Response> => {
    const body: IUser = req.body;

    try {
      return res.status(200).json({ error: false, message: body });
    } catch (error) {
      return res.status(500).json({ error: true, message: "unsuccessful" });
    }
  }
);

router.post(
  "/task/create",
  requestValidator(taskSchema),
  async (req: Request, res: Response): Promise<Response> => {
    const body: ITask = req.body;

    try {
      return res.status(200).json({ error: false, message: body });
    } catch (error) {
      return res.status(500).json({ error: true, message: "unsuccessful" });
    }
  }
);

export default router;
