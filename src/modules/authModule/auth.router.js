import { Router } from "express";
import * as authServices from './auth.controller.js';
import { validationMiddleware } from "../../middleWare/validation.middleWare.js";
import { loginValidationSchema, registerValidationSchema } from "./auth.validations.js";
const router = Router();



router.post(
     '/register',
     validationMiddleware(registerValidationSchema),
     authServices.register
);
     
router.post(
     '/login',
     validationMiddleware(loginValidationSchema),
     authServices.login,
);

export default router;