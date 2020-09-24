"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var main_route_1 = __importDefault(require("./routes/main.route"));
var app = express_1.default();
app.use(helmet_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(morgan_1.default("dev"));
var PORT = process.env.PORT || 8080;
app.use("/api", main_route_1.default);
app.listen(PORT, function () {
    console.info("App is listening on port " + PORT);
});
