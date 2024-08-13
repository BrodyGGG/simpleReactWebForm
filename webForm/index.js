//using the express webserver
const express = require("express");
const myCustomRoutes = require("./routes/user");

//load express
const app = express();
const port = 3000;

//use the routes in /routes/user
//localhost:3000/user_routes
app.use("/user_routes/", myCustomRoutes);

//routes in this file
app.get("/", (req,res)=>{
    res.send("Hello World");
})

//not normally will we do
//usually front end project manages hosting html pages 
//allowing user to see userinput.html
app.use(express.static('public'));

//set up server
app.listen(port, () => {
    console.log("server started on port: " + port);
})