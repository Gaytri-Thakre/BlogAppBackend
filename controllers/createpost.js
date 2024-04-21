const Post = require("../models/Post");
exports.createpost = async(req,res) =>{
    try{
        const {title,content}=req.body;
        const response = await Post.create({title,content});
        // send data
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfull'
            })
    }catch(err){
        console.log("Error in the CreatePostController")
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}