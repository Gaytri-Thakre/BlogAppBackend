const Post = require("../models/Post");
const Like = require("../models/Like")
exports.likepost = async(req,res) =>{
    try{
        //for using save function  Object should be ready
        // fetch Data from req.body
        const {post,user} = req.body;
        const like = new Like({
            post,user,
        });
        const saveLike = await like.save();
        


        // change comment array of post
        const updatedPost = await Post.findByIdAndUpdate(
                            post,
                            {$push:{Like: saveLike._id}},
                            {new:true})
              
        res.json({
            success: true,
            post: updatedPost,
            message: "Like added successfully",
        })
    }catch(error){
        return res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}


// Unlike a post
exports.unlikePost = async(req,res)=>{
    try{
        const{post,user} = req.body;
        // find and delete the like collection
        const deletedLike = await Like.findOneAndDelete({post:post,_id:user});
        // update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post,
                                                        {$pull:{Likes:deletedLike._id}},{new:true});
        res.json({
            success: true,
            post: updatedPost,
            message: "UnLike successfully",
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