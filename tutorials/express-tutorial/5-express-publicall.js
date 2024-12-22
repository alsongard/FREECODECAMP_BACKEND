/**
 * a complete variation of 4-express* file, in this the index file has
 * been moved to the static folder(public) and is rendered by 
 * default as the landing page for localhost:portNumber
 */


const express = require('express');
const path = require("path")
const app = express() // const server = http.createServer()

app.use(express.static(path.join(__dirname, "public") ))

// app.get("/", (request, response)=>{
//     response.status(200).send("Home Page")
// })

//  to counter the following error we do
// app.get("/index.html", (request, response)=>{
//     response.sendFile(path.join(__dirname, "html_files", "index.html"))
// })
app.get("/about", (request, response)=>{
    response.status(200).send("<h1>Welcome to About Page </h1>")
})
app.all("*", (request, response)=>{
    response.status(404).send("<h1> Cannot find Page</h1>")
})



// app.get | display
// app.post | insert
// app.delete | delete
// app.put  | update
// app.all |
// app.use | middleware 
// app.listen


app.listen(5000, ()=>{
    console.log("Listening on port 5000..")
})

