"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const main_route_1 = __importDefault(require("./routes/main.route"));
const Task_1 = require("./db/models/Task");
const User_1 = require("./db/models/User");
const app = express_1.default();
app.use(helmet_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(morgan_1.default("dev"));
// Connect to DB
typeorm_1.createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "nairobi",
    database: "task",
    entities: [Task_1.Task, User_1.User],
    synchronize: true,
})
    .then((connection) => {
    console.log("connected");
})
    .catch((error) => console.log(error));
const PORT = process.env.PORT || 8080;
app.use("/api", main_route_1.default);
app.listen(PORT, () => {
    console.info(`App is listening on port ${PORT}`);
});
