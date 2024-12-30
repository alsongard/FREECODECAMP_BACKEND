const express = require("express");
const peopleData  = require("./new_data.js");
const app = express();
const path = require("path");
const exp = require("constants");


app.use(express.static(path.join(__dirname, "methods_public")));
app.use(express.urlencoded({extended: false}));

app.get("/api/people",(request,response)=>{
    response.status(200).json({success: true, data:peopleData})
});


app.post("/api/people", (request, response)=>{
    response.status(201).send("Success");
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
