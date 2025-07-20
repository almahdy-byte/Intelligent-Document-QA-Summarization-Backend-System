
import authRouter from './modules/authModule/auth.router.js';
import { connectDB } from './DB/connect.js';
import  {AppError}  from './utils/errorHandlers/appError.js';
import { StatusCodes } from 'http-status-codes';
import { globalErrorHandler } from './utils/errorHandlers/globalErrorHandler.js';
export const bootstrap = async(app , express) =>{

    await connectDB();

    app.use(express.json());
    
    app.use('/auth' , authRouter)
    app.get("/", (req, res) => res.json({ message: "Welcome to the Intelligent Document QA Summarization Backend System!" }));
    app.use(globalErrorHandler)
    // app.use('*' , (req , res , next )=>{
    //     return next(new AppError('Route not found', StatusCodes.NOT_FOUND));
    // })
}