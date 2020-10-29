"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const requestSchemas_1 = require("../helpers/validators/requestSchemas");
const requestValidators_1 = require("../helpers/validators/requestValidators");
const router = express_1.Router();
// Home page
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
            return res
                .status(200)
                .json({ error: false, message: "successfully logged in" });
        }
        return res
            .status(200)
            .json({ error: false, message: "You are not logged in" });
    }
    catch (error) {
        return res.status(500).json({ error: true, message: "unsuccessful" });
    }
}));
// Login Route
router.post("/login", requestValidators_1.requestValidator(requestSchemas_1.loginSchema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { email, password } = body;
    try {
        if (email === "wechuli@email.com" && password === "password") {
            req.session = { loggedIn: true };
            res.redirect("/api");
            return;
        }
        else {
            return res
                .status(403)
                .json({ error: true, message: "unauthorized request" });
        }
    }
    catch (error) {
        return res.status(500).json({ error: true, message: "unsuccessful" });
    }
}));
// Log out
router.get("/logout", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.session = null;
        res.redirect("/api");
        return;
    }
    catch (error) {
        return res.status(500).json({ error: true, message: "unsuccessful" });
    }
}));
// create a task
router.post("/task/create", requestValidators_1.requestValidator(requestSchemas_1.taskSchema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        return res.status(200).json({ error: false, message: body });
    }
    catch (error) {
        return res.status(500).json({ error: true, message: "unsuccessful" });
    }
}));
exports.default = router;
