// get http module from node

const http = require("node:http");
const fs = require("node:fs");

let data;
//create server
/**
 * request (req) : object with request information from the client
 * respond (res) : response object the server
 */
const server = http.createServer((req, res)=>{
    data = {
        method: req.method,
        url: req.url,
        headers : JSON.stringify(req.headers)
    };
    //convert the data object to string
    const dataString = JSON.stringify(data, null, 2);
    res.write("Welcome to freecodecamp backend full tutorial ");
    fs.writeFile("./content/requestInfo.txt", dataString, (err)=>{
        if (err)
        {
            console.log(`Error : ${err}`);
        }
        console.log("Data written to file.")
    })
    res.end();
});

server.listen(5000);
