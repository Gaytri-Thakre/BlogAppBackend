const express = require("express");
const router = express.Router();

const {createpost} = require("../controllers/createpost");

// define Route:
router.post("/createPost",createpost);

module.exports = router;