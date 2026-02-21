"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const httpStatus_1 = require("../utils/httpStatus");
const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || httpStatus_1.httpStatus.INTERNAL_SERVER_ERROR;
    const message = err.message || 'Internal Server Error';
    const response = {
        success: false,
        message,
        error: {
            statusCode,
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
            ...(err.details && { details: err.details }),
        },
    };
    res.status(statusCode).json(response);
};
exports.errorMiddleware = errorMiddleware;
