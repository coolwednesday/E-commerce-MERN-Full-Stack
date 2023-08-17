import mongoose from 'mongoose'
//trim removes all white spaces
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    answer:{
        type: String,
        required: true,
    },
    role:{
     type: Number,
     default:0
    }

},{timestamps:true}) 

export default mongoose.model('users',userSchema)