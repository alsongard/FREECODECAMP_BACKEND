const express = require("express");
const productData = require("./react-store-products.js")
// console.log(productData);
const app = express();

app.get("/", (request, response)=>{
    response.send("<h1>Merry Christmas</h1>");
})

app.get("/api/products", (request, response)=>{
    response.json(productData);
});


//  INTRODUCTION TO QUERY STATEMENTS
app.get('/api/products/query', (request,response)=>{
    //get query first on console to learn request query object 
    console.log(request.query);

    const {limit, search} = request.query;
    
    // console.log(` this is the limit : ${limit}`);
    let sortedProducts =[...productData];
    console.log(`type of sortedProducts : ${typeof(sortedProducts)}`)
    // console.log(sortedProducts);  pritns the productData
    if (search)
    {
        sortedProducts = sortedProducts.filter((productItem)=>{
            return productItem.name.startsWith(search);
        });
    };
    if (limit)
    {
        sortedProducts =  sortedProducts.slice(0, Number(limit));
        
    }
    if (sortedProducts.length < 1)
        {
            response.status(200).json({"success":true, "data":[], "message":"Product not Found. Try with another name" });
            // response.status(200).send("<h1>Product not Found. Try with another name</p>") 
            // or use return  response.status(200).json({"success":true, "data":[], "message":"Product not Found. Try with another name" }); ot
            // avoid response.json() multiple times
            
        }
    else{
        response.status(200).send(sortedProducts);
    }

    // response.send("<h1>Welcome to Query Strings</h1>");
});





app.listen(5000, ()=>{
    console.log("Server is listening on port 5000...")
});
