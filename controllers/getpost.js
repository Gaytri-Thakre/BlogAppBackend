const Post = require("../models/Post");
exports.getpost = async(req,res) =>{
    try{
        
        const response = await Post.find().populate("comment");
        // send data
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'GetPost Successfull'
            })
    }catch(err){
        console.log("Error in the GetPostController")
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}