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


## streams
- writeable : used to write data sequentialy
- readable : read data sequentially
- duplex: read and write data sequentially
- transform : data can be modified in reading and writting


```
const {createReadStream} = require("fs")
const stream = createReadStream("./content/big.txt")

stream.on("data", (result)=>{
    console.log(data)
})
```