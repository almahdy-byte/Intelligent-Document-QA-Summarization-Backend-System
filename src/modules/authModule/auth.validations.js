import Joi from "joi";
import { generalValidationSchema } from "../../middleWare/validation.middleWare.js";

export const registerValidationSchema = Joi.object({
    userName: generalValidationSchema.userName.required(),
    email: generalValidationSchema.email.required(),
    password: generalValidationSchema.password.required(),
    role: generalValidationSchema.role,
});

export const loginValidationSchema = Joi.object({
    email: generalValidationSchema.email.required(),
    password: generalValidationSchema.password.required(),
});