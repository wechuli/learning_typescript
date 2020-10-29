import { Router, Request, Response } from "express";
import { loginSchema, taskSchema } from "../helpers/validators/requestSchemas";
import { requestValidator } from "../helpers/validators/requestValidators";
import { IUser } from "../db/models/User";
import { ITask } from "../db/models/Task";

const router = Router();

// Home page
router.get(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      if (req.session?.loggedIn) {
        return res
          .status(200)
          .json({ error: false, message: "successfully logged in" });
      }
      return res
        .status(200)
        .json({ error: false, message: "You are not logged in" });
    } catch (error) {
      return res.status(500).json({ error: true, message: "unsuccessful" });
    }
  }
);

// Login Route
router.post(
  "/login",
  requestValidator(loginSchema),
  async (req: Request, res: Response): Promise<Response | void> => {
    const body: IUser = req.body;

    const { email, password } = body;

    try {
      if (email === "wechuli@email.com" && password === "password") {
        req.session = { loggedIn: true };
        res.redirect("/api");
        return;
      } else {
        return res
          .status(403)
          .json({ error: true, message: "unauthorized request" });
      }
    } catch (error) {
      return res.status(500).json({ error: true, message: "unsuccessful" });
    }
  }
);

// Log out
router.get(
  "/logout",
  async (req: Request, res: Response): Promise<Response | void> => {
    try {
      req.session = null;
      res.redirect("/api");
      return;
    } catch (error) {
      return res.status(500).json({ error: true, message: "unsuccessful" });
    }
  }
);

// create a task
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
