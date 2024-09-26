// console.log("Hello There");

const express = require("express");
const app = express();

app.listen(3000, ()=>{ console.log("Server is running on port 3000");});


app.get("/", (req,res)=>{
    res.send("Node Api Running : running till now : Successfully installed nodemon : Only refresh on browser");
});