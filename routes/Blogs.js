const express = require("express");
const router = express.Router();

const {createpost} = require("../controllers/createpost");
const {createcomment} =require("../controllers/comment");
const {getpost} = require("../controllers/getpost");
const {likepost,unlikePost} = require("../controllers/like");

// define Route:

router.post("/createPost",createpost);
router.post("/createcomment",createcomment);
router.get("/posts",getpost);
router.post("/likes/like",likepost);
router.post("/likes/unlike",unlikePost);
// router.post("/getpost",getpost);

module.exports = router;