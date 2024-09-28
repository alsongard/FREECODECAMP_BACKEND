// console.log("Hello There");

const express = require("express");
const mongoose = require('mongoose');

const app = express();

app.use(express.json());


app.get("/", (req,res)=>{
    res.send("Node Api Running : running till now : Successfully installed nodemon : Only refresh on browser");
});


app.post("/api/products", (req, res)=>{
    console.log(req.body); //from user
    res.send(req.body);
})

mongoose.connect("mongodb+srv://alsongard:UBsTr9zfJlQSE07E@backend.brhgn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend")
.then( ()=>{
    app.listen(3000, ()=>{ console.log("Server is running on port 3000");});
    console.log("Connected to the database");
})
.catch(error => console.log(error));
