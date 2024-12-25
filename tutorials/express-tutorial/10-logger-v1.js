const express = require("express");
const app = express();


// request => middleware => response

function logger(request, response, next){
    const url = request.url;
    const method = request.method;
    const year = new Date().getFullYear;
    console.log(` Method : ${method} \n Year : ${year} \n URL: ${url}`);
    next();
}
app.get("/", logger, (request, response)=>{
    response.send("<h1>Welcome to Middleware Homepage</h1>")
    
});

app.get("/about",logger, (request, response)=>{
    response.send("<p>About Page</p>")
})

app.listen(5000, ()=>{
    console.log("Servers is listening on port 5000...");
})