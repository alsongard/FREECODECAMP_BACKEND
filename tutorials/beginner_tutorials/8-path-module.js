//the node path module is used to provide functions for working with files and directory paths
const path  = require("node:path");
const os = require("node:os");
console.log(path.dirname("/home/alson-kali/PROGRAMMING")); // this returns the parent of the directory name

//Provides the platform-specific path segment separator
console.log(`the sep() funciton is sued to provide the segment seperator for the OS : ${os.type()} : ${path.sep} .`);

