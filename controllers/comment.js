const Comment = require("../models/Comment");
const Post = require("../models/Post");
exports.createcomment = async(req,res) =>{
    try{
        //for using save function  Object should be ready
        // fetch Data from req.body
        const {post,commentText,user} = req.body;
        const comment = new Comment({
            post,commentText,user
        });
        const savedComment =await comment.save();

        // change comment array of post
        const updatedPost = await Post.findByIdAndUpdate(
                                                post,
                                                {$push:{comment: savedComment._id}},
                                                {new:true}).populate("comment");
              
        res.json({
            success: true,
            post: updatedPost,
            message: "Comment added successfully",
        })
    }catch(error){
        return res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:error.message,
        })
    }
}