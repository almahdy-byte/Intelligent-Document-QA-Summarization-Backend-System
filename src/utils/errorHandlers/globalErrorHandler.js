import { StatusCodes } from "http-status-codes";



export const globalErrorHandler = (error, req, res, next) => {
    return res
    .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    .json({
         error: error.message || 'Internal Server Error',
         status: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR ,
         stack : error.stack || 'No stack trace available'
    });
}