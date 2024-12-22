const express = require("express");
const app =  express()
const product = require("./react-store-products.js")
app.get("/", (request, response)=>{
    // console.log(request)
    // response.json({full_name: "Elon Musk",  company: ["tesla", "spacex", "twitter"]})  
    response.json(product)
})

app.listen(5000, ()=>{
    console.log("fu wuyuan listening on port 5000..")
})