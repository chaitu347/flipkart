import { Response } from 'express';

interface SuccessResponse {
    success: true;
    data: any;
    message: string;
}

export const sendResponse = (
    res: Response,
    statusCode: number,
    data: any,
    message: string = 'Success'
) => {
    const responseBody: SuccessResponse = {
        success: true,
        data,
        message,
    };
    return res.status(statusCode).json(responseBody);
};
