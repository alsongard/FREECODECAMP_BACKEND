const http = require("node:http")
const {readFileSync} = require("node:fs")
const path = require("node:path")


const filePathpath = path.join(__dirname, "html_files", "index.html")
const stylePath = path.join(__dirname, "html_files", "css","index.css")


const homePage = readFileSync(filePathpath, "utf-8")
const stylePage = readFileSync(stylePath, "utf-8")

console.log(stylePath)

const server = http.createServer((request, response)=>{
    const url = request.url;      
    console.log(request.url);
    if (url === "/")
    {
        response.writeHead(200, {'content-type': 'text/html'})        
        response.write(homePage);
        response.end()
    }
    //about page
    else if (url === "/about")
    {
        response.writeHead(200, {'content-type': 'text/html'})
        response.write("<h1>about page </h1>")
        response.end()
    }
    //contact page
    else if (url === "/contact")
    {
        response.writeHead(200, {'content-type': 'text/html'})
        response.write("<h1>contact page World</h1>")
        response.end()
    }
    //style file
    else if (url === "/css/index.css"){
        response.writeHead(200, {"content-type": "text/css"})
        response.write(stylePage)
        response.end()
    }
    else{
        response.writeHead(404, {'content-type': 'text/html'})
        response.write("<p>Page not Found</p>")
        response.end()
    }
})



server.listen(5000, ()=>{
    console.log("listening on port 5000");
})

// provide more info to the browser on what we send/response : next task
/**
 * for multiple pages
 * request.method = the request is an object which have many properties [console.log(request)]
 * 
 * const http = require("node:http");
 * const server =  http.createServer((request, response)=>{
 *      const url = request.url;
 *      if (url === "/")
 *      {
 *          response.writeHead(200, {'content-type': 'text/html'})        
 *          response.write("<h1>Hello World</h1>");
 *          response.end()
 *      }
 *      //about page
 *      else if (url === "/about")
 *      {
 *          response.writeHead(200, {'content-type': 'text/html'})
 *          response.write("<h1>Hello World</h1>")
 *          response.end()
 *      }
 *      //contact page
 *      else if (url === "/contact")
 *      {
 *          response.writeHead(200, {'content-type': 'text/html'})
 *          response.write("<h1>Hello World</h1>")
 *          response.end()
 *      }
 *      else{
 *          response.writeHead(404, {'content-type': 'text/html'})
 *          response.write("<p>Page not Found</p>")
 *          response.end()
 *      }
 * })
 * 
 */