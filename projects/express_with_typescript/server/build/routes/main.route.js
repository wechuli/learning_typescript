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
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({ error: false, message: "successful" });
    }
    catch (error) {
        return res.status(500).json({ error: true, message: "unsuccessful" });
    }
}));
router.post("/login", requestValidators_1.requestValidator(requestSchemas_1.loginSchema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        return res.status(200).json({ error: false, message: body });
    }
    catch (error) {
        return res.status(500).json({ error: true, message: "unsuccessful" });
    }
}));
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
