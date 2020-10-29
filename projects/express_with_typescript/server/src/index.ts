import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import "reflect-metadata";
import { createConnection } from "typeorm";
import mainRouter from "./routes/main.route";
import { Task } from "./db/models/Task";
import { User } from "./db/models/User";

const app = express();

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Connect to DB

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "nairobi",
  database: "task",
  entities: [Task, User],
  synchronize: true,
})
  .then((connection) => {
    console.log("connected");
  })
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 8080;

app.use("/api", mainRouter);

app.listen(PORT, () => {
  console.info(`App is listening on port ${PORT}`);
});
