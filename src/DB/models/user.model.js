import { model, Schema } from "mongoose";
import { UserRoles } from "../../utils/enums/enums.js";
import { Hash } from "../../utils/hash/hash.js";

const userSchema = new Schema({


    userName : {
        type : String,
        required : true,
    }, 

    email : {
        type : String,
        required : true, 
        unique: true,
        trim: true,  
    },
    password : {
        type : String,
        trim: true,  
    },

    role : {
        type : String,
        enum : Object.values(UserRoles),
        default : UserRoles.USER,
    },

    OTP :[{
        type : String
    }],

    isVerified : {
        type : Boolean,
        default : false
    },

},{timestamps : true});


userSchema.pre('', function(next){
    if(this.isModified('password')){
        this.password = Hash.hash(this.password)
    }
})

export const userModel = model('User', userSchema);