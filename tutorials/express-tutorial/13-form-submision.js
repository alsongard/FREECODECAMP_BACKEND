// file handler for form submission on traditional and Javascript forms.
const express = require("express");
const peopleData  = require("./new_data.js");
const app = express();
const path = require("path");
const exp = require("constants");


app.use(express.static(path.join(__dirname, "methods_public")));  // middleware used for static pages
app.use(express.urlencoded({extended: false})); // middleware used for traditional form
app.use(express.json()) // another inbuilt middleware used for javascript form
app.get("/api/people",(request,response)=>{
    response.status(200).json({success: true, data:peopleData})
});


app.post("/api/people", (request, response)=>{
    const {name} = request.body;
    // console.log(`Type of request body is : ${request.body} and data is : ${request.body}`)
    console.log(name); // prints out the value inpute by the user as an object
    if (name)
    {
        response.status(201).json({sucess:true, data: name})
    }
    else{
        response.status(400).json({success:false, msg:"please provide value"})
    }
});

app.post("/login", (request, response)=>{
    // console.log(request.body) // prints [Object: null prototype] { fullName: 'Arcade VI Jinx' }
    const {fullName} = request.body;
    // response.send("<p>POST working</p>");
    if (fullName)
    {
        response.status(200).send(`My body is on the line now i can't feel this time now from  ${fullName}`)
    }
    else{
        response.status(404).send("<p>Enter full name </p>");
    }
})

app.listen(5000, (request, response)=>{
    console.log("Listenning on port 5000...");
});
