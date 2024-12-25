const express = require("express");
const productData = require("./react-store-products.js")
// console.log(productData);
const app = express();

app.get("/", (request, response)=>{
    response.send("<h1>Merry Christmas</p>");
})


// using route parameters
// using productCategories as route parameters
app.get("/product/:productType", (request, response)=>{
    console.log(request.params);
    console.log(typeof(request.params))
    let {productType} = request.params;
    console.log(productType)
    productType = productType.replace(":", "")
    console.log(productType);
    const productFound = productData.find((productitem)=>{
        if (productitem.category === productType)
        {
            const {id, name, price, description, category} = productitem;
            return {id, name, price, description, category};
        }
    });

    if (productFound)
    {
        response.json(productFound);
    }
    else{
        response.status(404).send("<p>Product category does not match any. Click to go <a href='/productCategories'>back</a> </p>")
    }
});

app.get("/productCategories", (request, response)=>{
    let product_array = [];
    const productCategories = productData.map((productItems)=>{
        const product_category_string = productItems.category;
        product_array.push(product_category_string);
        product_array = [...new Set(product_array)];
        return product_category_string;
    });

    const uniq_categories = [... new Set(productCategories)];

    response.send(uniq_categories);
    console.log(product_array);

});

app.get("/product/:productCategory/company/:companyName", (request, response)=>{
    let {productCategory, companyName} = request.params;
    console.log(productCategory);
    console.log(companyName); // they have semicolon
    productCategory = productCategory.replace(":", "");
    companyName = companyName.replace(":", "");
    console.log(`${productCategory} and ${companyName}`)
    
    const myProduct = productData.find((productItem)=>{
        if (productItem.category === productCategory && productItem.company === companyName)
        {
            console.log("product found");
            return productItem;

        }
    });


    if (myProduct)
    {
        response.json(myProduct)
    }
    else{
        response.status(404).send("<p>Product category does not match any. Click to go <a href='/productCategories'>back</a> </p>")
    }
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000...")
})