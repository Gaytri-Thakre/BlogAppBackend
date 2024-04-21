const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        content:{
            type:String,
            required:true,
            maxLength:100,
        },
        // comment 
        comment:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }],
        // like
        Like:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Like'
        }],
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);
module.exports = mongoose.model("Post",postSchema)