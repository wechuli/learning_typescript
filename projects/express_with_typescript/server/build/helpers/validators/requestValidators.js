"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValidator = void 0;
function requestValidator(schema) {
    return (req, res, next) => {
        var _a, _b;
        let validateResult = schema.validate(req.body, { abortEarly: false });
        if ((_a = validateResult.error) === null || _a === void 0 ? void 0 : _a.details) {
            const errors = (_b = validateResult.error) === null || _b === void 0 ? void 0 : _b.details;
            const errorObj = errors.map((error) => {
                return {
                    message: error.message,
                    type: error.type,
                };
            });
            return res.status(400).json({ error: true, errors: errorObj });
        }
        next();
    };
}
exports.requestValidator = requestValidator;
