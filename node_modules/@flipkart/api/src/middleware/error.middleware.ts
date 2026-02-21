import { Request, Response, NextFunction } from 'express';
import { httpStatus } from '../utils/httpStatus';

export interface ApiError extends Error {
    statusCode?: number;
    details?: any;
}

export const errorMiddleware = (
    err: ApiError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
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
