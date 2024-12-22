// the fs module is used for interacting with the file system.

// The filesystem can be used in 2 ways:
//promised-based APIs:
const fsPromise = require("node:fs/promises");

// or callback and sync APIs:

const fs = require("node:fs");
console.log(`Type of fs is ${typeof(fs)}`);
// console.log(fs) ; //the following gives you all the functions

//RUNNING THE FUNCTION MULTIPLE TIMES ONLY APPENDS DATA:
// fs.appendFile("./content/first.txt", " \t data to append", (err)=>{
//     if (err)
//     {
//         throw err;
//     }
//     console.log("File and data has been added succesfully")
// }); 

// provided the path to the directory exist and you run the following code, it creates the new file
// and appends the data.
// the example below is asynchronous by using callback functions
fs.readFile("./content/first.txt", "utf8", (err, data) => {
    if (err)
    {
        console.log(err);
    }
    else
    {
        console.log(`File contents : ${data}`);
    }
});


fs.writeFile("./content/second.txt", "It is well with my sould", (err)=>{
    if (err) console.log(`Error : ${err}`);
    console.log("File created and data submittted.")
})