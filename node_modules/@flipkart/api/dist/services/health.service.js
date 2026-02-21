"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHealth = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const checkHealth = async () => {
    try {
        // Check DB status by running a simple query
        await prisma_1.default.$queryRaw `SELECT 1`;
        return {
            status: 'ok',
            database: 'connected',
        };
    }
    catch (error) {
        return {
            status: 'ok',
            database: 'disconnected',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
};
exports.checkHealth = checkHealth;
