import { AppError } from "./appError.js";

export const asyncErrorHandler = (fn) => {
    return (req, res, next) => {

        Promise.resolve(fn(req, res, next))
        .catch((error) => {
             return next(new AppError(error.message || 'Internal Server Error', error.statusCode || 500));
        });
    }
}