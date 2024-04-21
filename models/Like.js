const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema(
    {
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        },
        user:{
            type:String,
            maxLength:50,
        },
    }
)
module.exports = mongoose.model("Like",likeSchema)
