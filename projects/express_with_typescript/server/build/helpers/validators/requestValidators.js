"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValidator = void 0;
function requestValidator(schema) {
    return function (req, res, next) {
        var _a, _b;
        var validateResult = schema.validate(req.body, { abortEarly: false });
        if ((_a = validateResult.error) === null || _a === void 0 ? void 0 : _a.details) {
            var errors = (_b = validateResult.error) === null || _b === void 0 ? void 0 : _b.details;
            var errorObj = errors.map(function (error) {
                return {
                    message: error.message,
                    type: error.type
                };
            });
            return res.status(400).json({ error: true, errors: errorObj });
        }
        next();
    };
}
exports.requestValidator = requestValidator;
