import Joi from "joi";
import { UserRoles } from "../utils/enums/enums.js";

export const validationMiddleware = (schema) => {
    return (req , res ,next) =>{
        const data = {
             ...req.body,
             ...req.query,
             ...req.params
        }

        const result = schema.validate(data);
        const error = [];

        if(result.error){
            result.error.details.forEach((err) => {
                error.push({
                    message: err.message
                });
            });
        }

        next();
    }
}


export const generalValidationSchema = {
    userName: Joi.string().min(3).max(30),
    email: Joi.string().email(),
    password: Joi.string().min(6).max(30),
    role: Joi.string().valid(...Object.values(UserRoles)),

}