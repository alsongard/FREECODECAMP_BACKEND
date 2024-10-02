const os = require("node:os");

console.log("The os.cpus() function return : Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.")
console.log(os.cpus());
//Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information 
//is available, such as if the /proc file system is unavailable.

console.log(`The os.freemem() function return the amount of memory that is free : ${os.freemem()}`);

console.log(`The os.machine() returns a machine type is : ${os.machine()}`); //x86_64

console.log(`The os.networkInterfaces() returns an object containing network interfaces that have been assigned a network address ${os.networkInterfaces()}.`)

let network = os.networkInterfaces();

//return the info about the user
console.log(os.userInfo());

//returns info about how long the system is to be uptime
console.log(`The System Uptime is ${os.uptime()} seconds.`);


// you could also assigned the os.function return value in an object
const currentUser =  {
    name : os.type(),
    release : os.release(),
    memSize : os.totalmem()
}
console.log(currentUser);