// Server creation
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000
app.use(express.json());
const BlogRoutes = require("./routes/Blogs")
// Mounting all the routes
app.use("/api/v2",BlogRoutes);
// start server
app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT} `)
})
// db connection
const dbConnect = require("./config/database");
dbConnect();

// default route:
app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage</h1>`)
})
