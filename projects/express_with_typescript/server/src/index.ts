import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import mainRouter from "./routes/main.route";

const app = express();

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;

app.use("/api", mainRouter);

app.listen(PORT, () => {
  console.info(`App is listening on port ${PORT}`);
});
