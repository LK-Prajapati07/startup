import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
    },
    email:{
        type:String
    },
    description:{
        type:String
    },


},
{
    timestamps:true
}
)
export default mongoose.model("Message",messageSchema);