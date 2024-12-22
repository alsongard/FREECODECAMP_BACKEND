// WORKING WITH ENVIRONMENT VARIABLES
/*
__dirname : Path to current directory
__filename : file name
require : function to use module (CommonJS)
process : info about env where the program is being executed
*/

console.log(`The directory upon which you're running your file is :\n ${__dirname}`);

console.log(`The file name is : \n ${__filename}`);

//setInterval() function :
// the setInterval function takes a function and seconds as an argument.
setInterval(()=>{
    console.log("Hello World, running after 2 seconds.")
}, 2000);