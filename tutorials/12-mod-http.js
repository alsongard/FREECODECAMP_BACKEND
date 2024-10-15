const http = require("node:http");

const server = http.createServer((req, res)=>{
    if (req.url === "/")
    {
        res.end("Welcome to home page");
    }
    else if(req.url === "/about")
    {
        res.end("Welcome to about page");
    }
    else{
        res.end(`
            <h1>Oops!</h1>
            <p>WE can't seem to find the page you're looking for </p>
            <a href="/">Back Home </a>
            `);
    }
    



});

server.listen(5000);