import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name must at 3 char"],
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last Name must at 3 char"],
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please provide valid email"],
    },
    phone:{
        type:String,
        required:true,
        minLength:[11,"Phone must be 11 digiit"],
        maxLength:[11,"Phone must be 11 digiit"],
    },
    message:{
        type:String,
        required:true,
        minLength:[10,"Message must be 10 char"],
    }
});

export const Message = mongoose.model("Message",messageSchema);