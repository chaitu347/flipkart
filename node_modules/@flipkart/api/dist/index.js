"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const v1_1 = __importDefault(require("./routes/v1"));
const error_middleware_1 = require("./middleware/error.middleware");
const httpStatus_1 = require("./utils/httpStatus");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// Middlewares
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// API Routes
app.use('/api/v1', v1_1.default);
// Handle 404 - Route Not Found
app.use((req, res, next) => {
    const error = new Error('Route Not Found');
    error.statusCode = httpStatus_1.httpStatus.NOT_FOUND;
    next(error);
});
// Global Error Middleware
app.use(error_middleware_1.errorMiddleware);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
