import { validationResult } from "express-validator";

export const fieldValidator = (req, res, next) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
        return res.status(400).json({
            statusCode: 400,
            message: "Campos incorrectos.",
            errors: result.array(),
        });
    }
    next();
};
