const express = require("express");
const new_logger = require("./12-new-logger");
const authorize = require("./12-authorize-middleware");

const app = express();

// app.use(new_logger); // for using a single middleware
app.use([new_logger, authorize])
app.get("/", (request, response)=>{
    response.send("<h1>Welcome to Homage</h1>");
})
app.get("/api/products", (request, response)=>{
    console.log(request.user);
    response.send("<h1>Products Page </h1>");

})
app.listen(5000, ()=>{
    console.log("Listening on port 5000...");
})