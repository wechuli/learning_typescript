import { Router, Request, Response } from "express";

import { IUser } from "../models/User";

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
  async (req: Request, res: Response): Promise<Response> => {
    const body: IUser = req.body;

    try {
      return res.status(200).json({ error: false, message: body });
    } catch (error) {
      return res.status(500).json({ error: true, message: "unsuccessful" });
    }
  }
);

export default router;
