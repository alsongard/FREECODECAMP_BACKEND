const logger = require("./11- logger-function");
const express = require("express");
const path = require("path");
const app = express();

// const filePath = path.join(__dirname, "homePage.html"); used in node httpCreateServer 
// const data = fs.readFileSync(filePath,"utf8"); used in node in httpCreateServer response.write(data)
// console.log(filePath);  // checked & correct

//readFile

app.use(logger);


app.get("/", (request, response)=>{
    response.sendFile(path.join(__dirname, "homePage.html"));
})

app.listen(5000, ()=>{
    console.log("Server listening on port 5000...")
})