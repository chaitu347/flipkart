import { Request, Response } from 'express';
import * as healthService from '../services/health.service';
import { catchAsync } from '../utils/catchAsync';
import { sendResponse } from '../utils/response';
import { httpStatus } from '../utils/httpStatus';

export const getHealth = catchAsync(async (req: Request, res: Response) => {
    const healthStatus = await healthService.checkHealth();

    const statusCode = healthStatus.database === 'connected'
        ? httpStatus.OK
        : httpStatus.SERVICE_UNAVAILABLE;

    return sendResponse(
        res,
        statusCode,
        healthStatus,
        healthStatus.database === 'connected' ? 'Server is healthy' : 'Server is partially healthy (DB down)'
    );
});
