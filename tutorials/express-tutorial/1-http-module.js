const http = require("node:http")

const server = http.createServer((request, response)=>{
    response.end("Weclome to exress tutorial");
})

server.listen(5000, ()=>{
    console.log("listening on port 5000");
})

// provide more info to the browser on what we send/response : next task