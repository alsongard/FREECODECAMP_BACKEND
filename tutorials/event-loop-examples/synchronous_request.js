// in the following code it takes sometime for other request to be responded
// to due to the about page

const http = require('node:http');


const server = http.createServer((request, respond)=>{
    if (request.url === "/")
    {
        respond.write("<h1>Welcome to Home Page </h1>");
        respond.end();

    }
    else if (request.url === "/about")
    {
        respond.write("<p>Weclome to about Page</p>");
        for (let i = 0; i < 1000; i++)
        {
            for (let j = 0; j < 1000; j++)
            {
                console.log(`i : ${i} | j : ${u}`)
            }
        }
        respond.end();

    }
    else
    {
        respond.write("<p>Error no Page <a href='/'>Click to go back </a></p>");
        respond.end();
    }
});

server.listen(5000, ()=>{
    console.log("Listening on port 5000...");
})

