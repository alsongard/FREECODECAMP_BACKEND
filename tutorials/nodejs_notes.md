# learning NodeJs and Express 
# node notes


## globals variable in node
__dirname : path to the current directory  
__filename : filename    
require : function that takes node modules  
module : info about the current module  
process : info about env where the program is being executed  


## working with functions
```
const john = "John";
const peter = Peter";

const sayHi = (name)=>{
    console.log(`Hello there ${name}`);
};
sayHi("susan");
sayHi(peter);
sayHi(john);
```

In CommonJS, everyfile is a module 
Modules  encapsulated code (only share minimum)

## Working with Modules or Files as Modules
Example:
names.js file:

```
const johnte = "John Tee";
const abigail = "Abigail Veronica";
console.log(module);
module.exports = {johnte, abigail};

```

utils.js file:
```
function sayHi(name)
{
    console.log(`Hello there ${name}`);
}

exports.module = sayHi;
```

App.js file
```
const names = require("./names");
const sayHi = require("./utils");

sayHi(names.abigail);
sayHi(names.johnte);
```

mind-grenade.js
When you import a module it's is actually invoked.
``require(fileName)``


## Built in Modules
follow the following for more information [link](https://nodejs.org/docs/latest/api/)
The following modules will be covered:
- OS
- PATH
- FS
- HTTP


**os module**
```
const os = require('node:os');

console.log(os.sep)
console.log(os.resolve(__dirname, './contents'))

console.log(os.arch())

```

**path module**
```
const path = require('node:path`);

```

## Synchronous and asynchronous functions


syncrhonous funciton
execute the code in block, that is in sequence.
```
```

Asynchronous functions
Execute the code in such a way that all the code is executed while programs or code statements such as functions that are still being processed do not hinderthe continuous execution of the other statements. After the code statements has been executed, it then sends a signal notifying it has finish the program execution.


**fs module**
asynchronous :
```
const {readFile, writeFile} = require('node:fs');

filePath = './content/fifth.txt';
readFile("filePath", (err, result)=>{
    if (err)
    {
        console.log(err)
    }
    else{
        console.log(result)
    }
})
```
The above program will result the file being displayed in ascii(american standard code for information interchage)


```
const {readFile, writeFile} = require('node:fs');

filePath = './content/fifth.txt';
readFile("filePath",'utf-8', (err, result)=>{
    if (err)
    {
        console.log(err)
    }
    else{
        console.log(result)
    }
})
```
While in this the result will be displayed in text(aplhanumeric characters).

**Remember: asynchronous enables you to execute other statements while other main blocks or functions are still being executed while synchronous the code is executed sequentially, meaning that a longer operation or process must be finished for the next code statement to be executed.**
Asynchronous uses promises and callback functions.

**http module:**  
when working with htpp module, one can create a server through the following:
```
const http = require('node:http');

const server = http.createServer((reqeust, response)=>{
    response.write("Welcome to your first http server using node");
    response.end();
});

server.listen(5000);
```

uses of npm whiich comes with node when installed
node package manager
- reuse our own code 
- use code from other developers
- share solutions to other projects

**installing packages using NPM **

1. Locally
``npm i <packagename>``
2. Global
``npm install -g <packagename>``

package.json : this is a manifest file that contains information about your project.  
can be created in 2 ways, that is manually or using using ``npm init`` or ``npm init -y ``


To install a package for:
1. Local dependency
``npm install <packageName>``

2. Global dependency
This can be done on the OS terminal or the vscode terminal
``npm install -g <packageName>``

package.json : this is a manifest file that contains information about your project.  
can be created in 2 ways, that is manually or using using ``npm init`` or ``npm init -y ``

**Install package as a dev dependency**
when installing nodemon we install it as a dev dependency
```
npm install nodemon -D
```
OR 
``npm install nodemon --save-dev```



## upcoming topics
- event loop, async patterns, events emitter and streams
- main concept
- pre-built code



**event module:**
In the events we are concerned with the on and emit functions.  
The on is first declared which is suppose to listen for the event. The event to listen should have the same name | be the same.   
Followed by the emit() function which initiates the event.
```
const EventEmitter = require("node:events")

const customEmitter = new Eventemitter()

customerEmitter.on("response", (name, location)=>{
    console.log(data recieved from ${name} at {locatoin})
})

customerEmitter.emit('response', 'johnte", "Nairobi")
```

To read a file directly and diplay we use:
- path
- readFileSync() 

```
const http = require("node:http");
const path = require("path");
const fs = require("node:fs"); //fs.readFileSync(path[, options])

const aboutPath = path.join(__dirname, "html_files", "about.html");
const homePath = path.join(__dirname, "html_files", "index.hthml");
const servicePath = path.join(__dirname, "html_files", "service.html");

const homePage = readFileSync(homePath);
const aboutPage = readFileSync(aboutPath);
const servicePage = readFileSync(servicePath)
const server = http.createServer((request, response)=>{
    const url = request.url;
    if (url === "/about")
    {
        response.write(aboutPage)
        response.end()
    }
    else if (url === "/")
    {
        response.write(homePage)
        response.end()
    }
        if (url === "/service")
    {
        response.write(servicePage)
        response.end()
    }
    else if (url === "*")
    {
        response.writeHead(404, {"content-type": "text/html"} ) //response.writeHead(statusCode[, statusMessage][, headers])
        response.write(<p>Cannot find Page <a href='/'>back</a></p>")
        response.end()
    }
})

```
if the code above is runned you might notice that the styles or images are  not displayed. One is required to provide a link which matches with the linnk provided in the html files. Example ``<link rel="stylesheet" href="./styles.css">``
```
const stylePath = path.join(__dirname, "html_files", "styles.css");
const stylePage = readFileSync(stylePath)
const server = http.createServer((request, response)=>{
    const url = request.url;
    if (url === "./styles.css")
    {
        response.write(stylePage;)
    }
})

``` 
Inserting the code above will resolve the issue of images and css not working.
However this is better resolved in express using static folder(public/staticFiles)


## streams
- writeable : used to write data sequentialy
- readable : read data sequentially
- duplex: read and write data sequentially
- transform : data can be modified in reading and writting


```
const {createReadStream} = require("fs")
const stream = createReadStream("./content/big.txt")

stream.on("data", (result)=>{
    console.log(result)
})
```


types of http messages:
1. http request messages - this is a message from the client
2. http response messages - this is a message from the server

Structure of http messages is:
startline
header
optional body


**response.end() :**
This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end(), MUST be called on each response.

**writeHead()**
to pass more information about the response we:
```
const http = require("node:http")
const server = http.createServer((request, repsonse)=>{
    response.writeHead(200, {'content-type': 'text/html'})
    response.write("<h1>Hello World</h1>");
    response.end()
})
```

**HTTP METHODS:**  
GET : Read data 
POST : insert data
PUT : update data
DELETE : delete data


## EXPRESS
First install express : ``npm i express --save`` then followed by:
To display or write data use: ``response.send()``
```
const express = require("express");

const app = express() // const server = http.createServer()

// app.get | display
// app.post | insert
// app.delete | delete
// app.put  | update
// app.all |
// app.use | 
// app.listen

app.get("/", (request, response)=>{
    response.send("<h1>Hello World</h1>")
})
app.listen(5000, ()=>{
    console.log("Listening on port 5000..")
})
```

The following code has the same defect in that for any links such as styles and images need to be given in 
their own app.get() function and the url to be the same with that of the browser link in html code in inspection 
```
app.get("/index.html", (request, response)=>{
    response.sendFile(path.join(__dirname, "html_files", "index.html"))
})
```

To resolve this problem we place external files to a static folder called public which will have stylesheet files, image files e.t.c  
Also you can host other pages by using th app.get() function

Example:
```
const path = require("path")
const express = require("express")
const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (request, response)=>{
    response.sendFile(path.join(__dirname, "html_files", "index.html"))
})

app.get("/about", (response, request)=>{
    response.sendFile(path.join(__dirname, "html_files", "about.html"))
})
```

Lastly we could move all files to the static public fodler and by default when the user 
is servered with the response, the index file (index.html) is displayed by default on the browser. *confirmed it's working*


Express JS  
API vs SSR
Express can either be used to setup server side rendering template or api(application program interface).  
**API**  
api http interface setup to interact with data. the data is send in json(javascript object notation). To send back our response we use res.json() method which performs all the heavy lifting that is setting the content type e.t.c
server provides data & any front-end app can perform a http request.
**SSR**  
server side rendering, we setup templates and send entire html, css and javascript by using res.render() method.


[res.json()](https://expressjs.com/en/5x/api.html#res.json)
json response sends a response which is the argument given and converts it into a json string using JSON.stringify
takes in an object


To send  html we use response.send()


**APIS**  
Setting up a localhost api.
To setup localhost api first have some data on your file then do the following:
```
// using express
const express = require("express");
const app = express();

//get file data
const productData = require("./product_data.js")

app.get("/", (request, response)=>{
    response.send(<div><h1>HomePage</p> <p> Click to view more <a href='/api/products/'>products</a></p></div>)
})

app.get("/api/products/", (request, response)=>{
    const myProducts = productData.map((dataItem)=>{
        return dataItem;
    })
    response.send(newProducts)
})

app.get("/api/technology", (request, response)=>{
    // perform some simple object destructuring
    const productItems = productData.find((productItem)=>{
        productItem.category === "technology"; // return first match
    })
    const newProductObject = {
        productItems.name,
        productItems.category,
        productItems.price,
        productItems.description
    }
    //response.send(newProductObject)

    // using object destructuring
    if (productItems)
    {
        const {name, category, price, description} = productItems;
        response.json( {name, category, price, description});
    }
    else
    {
        response.status(404).send("Product not Found");
    }
    
})

```
**Important** 
In callback functions when using curly braces one must use the return statement otherwise it will result in an error.


**Route Parameters**
Very helpfull in express when extracting a sample of data from a group.
route are parameters that are given to the url.

Example : Using Route
```
const express = require("express");
const app = express();

app.get("/", (request, response)=>{
    response.send("<h1>Merry Xmas </h1>");
});


app.get("/products/:category", (request, response)=>{
    // get paramater value  
    console.log(request.params);
    let {productType} = request.params;
    productType = productType.replace(":", "");
    productFound = products.find((productItem)=>{
        if (productItem.category === productType)
        {
            return productItem;
        }
    });

    // object destructuring
    const {id, name, category, price, description} =productFound;
    repsonse.json( {id, name, category, price, description});
})
```

To handle route parameters with white space use ``%20`` encode value that represents white space. It will be automatically decoded by express.

Example:
``localhost:5000/product/living%20room``



**Query String Parameters**
sends small information to the servers using the url
used for querying the database or filtering the results.
if no query is given it will display the whole productData.
```
app.get("/api/products/query", (request, response)=>{
    console.log(request.query);
    response.send("<h1>Welcome to Query Strings</h1>");
})
```
singleQuery:
``localhost:5000?name=john``
to work with multiple queries use the ampersand (&):
``localhost:5000?name=john&age=23``


## working with middlware:
req ==> middleware ==> response
```
const express = require("express");
const app  = express();
function logger()
{
    const url = request.url;
    const method = request.method;
    const date = new Date().getFullYear();
    console.log(`Method : ${method} \t Date : ${date} \t URL : ${url}`);
}

app.get("/", (request, logger, response)=>{
    response.send("<h1>Home Page</h1>");
})l

```
In the above code the page continously loads, to prevent this one can either send a response in the  or pass a ``next()`` middleware.
*Example 1:*
```
function logger(request, response, next){
    const url = request.url;
    const method = request.method;
    const year = new Date().getFullYear();
    console.log(` Method : ${method} \n Year : ${year} \n URL: ${url}`);
    response.send("<h1>Home</h1>")
}
app.get("/", logger, (request, response)=>{
    
})
```

*Example 2:*
```
function logger(request, response, next)
{ 
    const url = request.url;
    const method =request.method;
    const year = new Date().getFullYear();

    console.log(url, method, year);
    next();
}

app.get("/", logger, (request, response)=>{
    response.send("<p>Face my Fears before so stay with me </p>");
});

app.get("/about", logger, (request, response)=>{
    response.send("<p>Remember me I couldn't remember me i'm on my own</p> ");
});
```


**app.use() method** 
adding middleware function to many `` app.get()`` routes we use ``app.use()``. It prevents the adding of  the middleware to each app.get() function.

move logger function to another file: 11-logger-function.js
```
function logger(request, response, next)
{
    const url = request.url;
    const method =request.method;
    const year = new Date().getFullYear();

    console.log(url, method, year);
    next();
}
module.exports = logger;
```

in app.js file: remember to follow the order
```
const express = require("express");
const app = express();
const logger = require("11-logger-function.js");

app.use(logger);

app.get("/", (request, response)=>{
    response.send("<h1>Logger middleware is applied to each Route</h1>");
})
app.get("/about", (request, response)=>{
    response.send("<h1>Logger middleware is applied to each Route</h1>");
})
```
*PREVIOUSLY WE NEEDED TO PASS the logger function(middleware) to each app.get() Route*  

OR
```
const express = require("express");
const app = express();
const logger = require("11-logger-function.js");

app.use("/api", logger);
// by passing a "/api" 

app.get("/products", (request, response)=>{
    response.send("<h1>Logger middleware is applied to each Route</h1>");
})
app.get("/about", (request, response)=>{
    response.send("<h1>Logger middleware is applied to each Route</h1>");
})
```

**working with multiple middlware**
step : 1 crete file and middleware function
```
const authorize = (request, response, next)=>{
    // get query object
    const {user} = request.url;
    if (user === "john")
    {
        // created an new property for request Object
        req.user = {name: "john", id:23};
        next();
    }
    else{
        res.status(401).send("Unauthorized");
    }
};
module.exports = authorize;
```

In app.js file:
```
const express = require("express");
const app = express();
app.use([new_logger, authorize]);
app.get("/", (request, response)=>{
    response.send("<h1>I gotcha</h1>");
});
app.get("/api/products", (request, response)=>{
    response.send("<h1>Product Items</h1>");
});

```
You could also pass more than 1 middleware directly to the function without using app.get() function
```
app.get("/", [new_logger, authorize], (response,request)=>{
    response.send("<h1>HomePage</h1>")
})
```

express also has it's own middleware functions an example is  express.static() method. Used for holding external source files such as css and javascript.
``app.use(express.static(path.join(__dirname, "public")))``

**IMPORTANT**
By default when a user request a page or a resource from the server the default method used is ``GET`` : ``localhost:5500/api/products/...``


## POST & GET METHODS
**POST METHOD:**
when using static() middleware and no app.get() function  has been set to the home url ("/") route, the page displayed will be the file in the public folder.
``app.use(express.static(path.join(__dirname, "methods_public"))``

1. Traditional Form Data Submission
Steps:
create html file with the following
```
<form action="/login" method="POST">
    <input type="text">
    <input type="submit" value="submit">
</form>

```
On submit if you haven't specified the ``/login`` url in app.js file you will get the error ``Cannot get /login 404``
It is required for one to create a route for the given url in app.js file
```
app.post("/login", (request, response)=>{
    response.send("POST working");
});
```

To get the data we are required to use a middleware:
```
app.use(express.urlencoded({extended: false}));
// to access the data we:
app.post("/login", (request, response)=>{
    const formData = request.body;
    console.log(formData);
    response.status(200)send("POST working");

})
```


2. Javascript Form Submission
step 1: create javascript form  
step 2: create result div  
step 3: display the data from "/api/people" using axios get method.
step 4: take user data using post method.
step 5: display new user input data using appendChild
```
<form>
    <input type="text" name="name" id="name" class="form-input" placeholder="Enter fullname..."/>
    <small class="form-alert"></small>
    <input id="submit" type="submit" value="submit"/>
</form>

<div class="resut"></div>
// get axios using cdn 
<script
        src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"
        integrity="sha512-bZS47S7sPOxkjU/4Bt0zrhEtWx0y0CRkhEp8IckzK+ltifIIE9EMIMTuT/mEzoIMewUINruDBIR/jJnbguonqQ=="
        crossorigin="anonymous"></script>
    <script  type="text/javascript">
        const result = document.querySelector(".result");
        const fetchPeople =  async ()=>{
            try{
                const data = await axios.get("/api/people");
                console.log(data);
                console.log(data.data)
                console.log(data.data.success);
                console.log(data.data.data);
                console.log(data.data.data.people);
                let myArray = data.data.data.people;
                console.log(myArray);
                let user_names = []
                for (let i = 0; i < myArray.length; i++)
                {
                    console.log(myArray[i].name);
                    user_names.push(myArray[i].name);
                }
                
                console.log(`user_names array : ${user_names} : type: ${typeof(user_names)}`);
                // create array object and append data
                const people = user_names.map((user_name)=>{
                    return user_name;
                })
                console.log(`people data type : ${typeof(people)} and data : ${people}`);
                // console.log(typeof(people))
                user_names.forEach((userName)=>{
                    const p = document.createElement('p');
                    p.textContent = userName;
                    result.appendChild(p);

                })
            }
            catch(error)
            {
                result.innerHTML = "<div class=alert alert-danger'>Can't fetch Data</div>"
            }
        }
        fetchPeople();

        const btn = document.getElementById("submit");
        const input = document.querySelector(".form-input");
        const formAlert = document.querySelector(".form-alert");

        btn.addEventListener("click", async (event)=>{
            event.preventDefault();
            const nameValue = input.value;
            console.log(`value of input ${nameValue}`);
            try{
                const {data} = await axios.post("/api/people", {name: nameValue});
                console.log(`data type of data is : ${typeof(data)}`)
                console.log("data object is : ")
                console.log(data)
                console.log("data.success is :")
                console.log(data.sucess)
                console.log("data.data is :")
                console.log(data.data)
                const new_user = data.data;

                console.log(`Name of new_user is : ${new_user}`)
                const p = document.createElement("p");
                console.log(p);
                p.textContent = new_user;
                result.appendChild(p);
            }
            catch(error)
            {
                formAlert.textContent = error.response.data.msg;
            };
            input.value = '';

        })
    </script>
```

in app.js file we add the given route for the form submission
```
app.post("/api/people", (request, response)=>{
    res.status(201).send("Success");
})
```

*Now to handle the data being submitted in the javascript form we use:*
Later on use the following:
```
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
```


