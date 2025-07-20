import { StatusCodes } from "http-status-codes";
import { userModel } from "../../DB/models/user.model.js";
import { asyncErrorHandler } from "../../utils/errorHandlers/asyncErrorHandler.js";
import { Hash } from "../../utils/hash/hash.js";
import { AppError } from "../../utils/errorHandlers/appError.js";

export const register = asyncErrorHandler(
    async (req , res , next)=>{

        const { email , password , userName } = req.body;

        // check if email is existing
        const checkEmail = await userModel.findOne({ email });
        if(checkEmail){
            return next(new AppError('Email already exists', StatusCodes.BAD_REQUEST));
        }

        // create new user
        const user = await userModel.create({
            email,
            password : Hash.hash(password),
            userName
        });

        return res
        .status(StatusCodes.ACCEPTED)
        .json({
            message: "User registered successfully",
            user : {
                userName: user.userName,
                email: user.email,
                role: user.role,
            }
        })

    }
    
)

export const login = asyncErrorHandler(
    async (req , res , next)=>{

        const { email , password } = req.body;

        // check if email is existing
        const user = await userModel.findOne({ email });
        if(!user){
            return next(new AppError('Email not found', StatusCodes.NOT_FOUND));
        }

        // check if password is correct
        const isPasswordCorrect = Hash.compare(password, user.password);
        if(!isPasswordCorrect){
            return next(new AppError('Incorrect password', StatusCodes.UNAUTHORIZED));
        }

        return res
        .status(StatusCodes.OK)
        .json({
            message: "User logged in successfully",
            user : {
                userName: user.userName,
                email: user.email,
                role: user.role,
            }
        });
    
    }
)