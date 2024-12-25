/**
 * The file is used for rendering a data file 
 * either using object destructuring
 * Use of find method
 */

const express = require("express");
const app =  express();
const products = require("./react-store-products.js");
// const tours = require("./react-tours-project.json");
// console.log(tours);
// console.log(typeof(products));
console.log(products.length);

app.get("/users", (request, response)=>{
    response.json({"full_names": "Elon Musk", "company":["spacex", "twitter", "tesla"]})
})
app.get("/", (request, response)=>{
    response.send("<p>To view products <a href='/api/products'>click me</a>")
})
app.get("/api/products", (request, response)=>{
    const productElements =  products.map((productItems)=>{

        // return productItems.id,
        // using object destructuring
        const  {id, name, price} = productItems

        const productId = productItems.id;
        const productName = productItems.name;
        const productPrice = productItems.price;
        const productCategory = productItems.category;
        // console.log(typeof(productPrice));
        // return myElement;
        // return {productId, productName, productPrice, productCategory}
        return {id, name, price}
    })
    response.json(productElements)
})
app.get("/product/1", (request, response)=>{
    // const firstProduct = products[1];
    // find() array method returns the first instance which matches with the given keyword
    const firstProduct = products.find((productItem)=>{return productItem.category === "office"})
    console.log(`The item is : ${firstProduct}`)
    response.json(firstProduct);
})
app.get("/api/technology", (request, response)=>{
    // perform some simple object destructuring
    const productFound = products.find((productItem)=>{
        // productItem.category === "technology"; // return first match
        if (productItem.category === "kitchen")
        {
            return  productItem;
        }
    });

    // OR
    /**
     * const productItem = products.find((productItem)=>productItem.category==="kitchen")
     */
    const newProductObject = {
        name : productFound.name,
        category :  productFound.category,
        price:  productFound.price,
        description:  productFound.description
    };
    // response.send(newProductObject);

    // using object destructuring
    const {id, name, price, image, description, shipping} = productFound;
    response.json({id, name, price, image, description, shipping})
    response.json({id, name, price, image, description, shipping})
})
app.listen(5000, ()=>{
    console.log("fu wuyuan listening on port 5000..")
})

// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.