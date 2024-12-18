const { readFileSync, createReadStream} = require('node:fs')
const http = require("node:http")

const server = http.createServer((request, response)=>{
    // const data = readFileSync("./content/new_big.txt", {encoding: "utf8"});
    const fileStream = createReadStream("./content/new_big.txt", "utf-8")

    fileStream.on("open", ()=>{
        fileStream.pipe(response)
    })
    fileStream.on("error", (err)=>{
        response.end(`error : ${err}`)
    })
})

server.listen(5000, ()=>{
    console.log("Server listening on 5000...")
})