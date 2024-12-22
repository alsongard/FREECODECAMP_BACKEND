// When using callback form, the callback fucntion is called Asychronously
const fs = require('node:fs');
console.log("Let go and Lets start");
const moptions = ["utf-8"];
fd = fs.open
fs.readFile("./content/second.txt",moptions, (err,data)=>{
    if (err)
    {
        console.log("Error :" + err);
    }
    console.log(`Data is : ${data}`);
});
fs.readFile("./content/first.txt", moptions, (err, data)=>{
    if (err)
    {
        console.log(`Error : ${err}`);
    }
    console.log(`Data : ${data}`);
})

fs.writeFile("./content/third.txt", "Instrumental music is awesome",(err)=>{
    if (err)
    {
        console.log(`Error : ${err}`);
    }
    else
    {
        console.log("Data written to file!");
    }
} )
console.log("finished with all tasks1")