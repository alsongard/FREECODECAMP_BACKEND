// console.log("Hello There");
require("dotenv").config();
const mongoose = require('mongoose');
const express = require("express");
const Product = require("./models/product.model");

const app = express();
app.use(express.json());

const username = process.env.username;
const password = process.env.password;

app.get("/", (request,response)=>{
    response.send("Node Api Running : running till now : Successfully installed nodemon : Only refresh on browser");
});

//  fetch all products
app.get("/api/products", async (request, response)=>{
    try{
        const products = await Product.find({});
        response.status(200).json(products);
    }
    catch(error)
    {
        response.status(500).send(`Error : ${error.message}`);
    }
})


//fetch a specific product
app.get("/api/product/:id",async (request, response)=>{
    const myProductId = request.params.id;
    console.log(`Product Id : ${myProductId}`);
    try{
        const singleProduct = await Product.findById(myProductId);
        // if (!singleProduct)
        // {
        //     response.status(200).json({success:true, msg: "No match found with the product id"});
        // }
        response.status(200).json({success: true, data: singleProduct})
    }
    catch(error){
        response.status(500).send(`Error: ${error.message}`)
    }
})

//enter product
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
        response.status(500).json({success: false, message: message.error}); //status 500 is a server error
    }
});

//update product
app.put("/api/product/:productId", async (request, response)=>{
    //get parameters
    try{
        const myproductId = request.params.productId;
    
        // get product //find productById
        const product = await Product.findByIdAndUpdate(myproductId, request.body);
        if (!product)
        {
            response.status(200).json({success: true, msg: `Product by id ${myproductId} not found`})
        }

        const updateProduct = await Product.findById(myproductId);
        response.status(200).json({success: true, data: updateProduct});
    }
    catch(error)
    {
        response.status(500).send(`Error: ${error.message}`);
    }
    

})

// detele product
app.delete("/api/deleteproduct/:id", async (request, response)=>{
    // get id by destructuring
    const {id} = request.params;

    try{
        const product  = await Product.findByIdAndDelete(id);
        if (!product)
            {
                response.status(200).json({success: true, msg: `Product by id : ${id} not found.`});
            }
        // console.log(product);
        response.status(200).json({success: true, msg:`Product by id : ${id}  found and deleted.`});
    }
    catch(error)
    {
        response.status(500).send(`Error: ${error.message}`);
    }
})



                // "mongodb+src://userName:password@clusterName.nrurtot.mongodb.net/NODE-API?retryWrites=true&w="
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.g3vdrwa.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=Cluster`)
.then( ()=>{
    console.log("Connected to the database");
    app.listen(3000, ()=>{ console.log("Server is running on port 3000");});
})
.catch(error => console.log(error));


app.listen(5000, ()=>{
    console.log("Listening on port 5000");
})