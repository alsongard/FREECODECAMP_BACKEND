// console.log("Hello There");

const mongoose = require('mongoose');
const express = require("express");
const Product = require("./models/product.model");

const app = express();
app.use(express.json());


app.get("/", (request,response)=>{
    response.send("Node Api Running : running till now : Successfully installed nodemon : Only refresh on browser");
});


app.post("/api/products", async (request, response)=>{
    // console.log(request.body)
    // response.send(request.body)
    try
    {
        const product = await Product.create(request.body);
        response.status(200).json(product);
    }
    catch(error)
    {
        res.status(500).json({message: message.error}); //status 500 is a server error
    }
})
                // "mongodb+src://userName:password@clusterName.nrurtot.mongodb.net/NODE-API?retryWrites=true&w="
mongoose.connect("mongodb+srv://woudNyaranga:forgot2@cluster0.g3vdrwa.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=Cluster")
.then( ()=>{
    console.log("Connected to the database");
    app.listen(3000, ()=>{ console.log("Server is running on port 3000");});
})
.catch(error => console.log(error));


app.listen(5000, ()=>{
    console.log("Listening on port 5000");
})