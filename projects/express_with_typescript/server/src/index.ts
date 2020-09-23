import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;

app.use(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      return res.status(200).json({ message: "ok" });
    } catch (error) {
      return res.status(500).json({ message: "error" });
    }
  }
);

app.listen(PORT, () => {
  console.info(`App is listening on port ${PORT}`);
});
