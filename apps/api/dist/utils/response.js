"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, statusCode, data, message = 'Success') => {
    const responseBody = {
        success: true,
        data,
        message,
    };
    return res.status(statusCode).json(responseBody);
};
exports.sendResponse = sendResponse;
