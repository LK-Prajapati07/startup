import Message from "../model/message.model.js";
export const sendController=async(req,res)=>{
    try {
        const {FirstName,companyName,email,webType,description}=req.body;
        if(!FirstName || !email || !webType || !description){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const message=await Message.create({FirstName,companyName,email,webType,description});
        res.status(200).json({
            success:true,
            message:"Message sent successfully",
            message:message
        })
    } catch (error) {
        console.log("error in sendController",error);
        res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error.message
        })
    }
}