const fs = require("node:fs");


const fd = fs.openSync("./content/third.txt", "w");
const data = Buffer.from("Hello file there", "utf-8");

const bytesWritten = fs.writeSync(fd, data);

console.log(`Total bytes written : ${bytesWritten}`);

fs.closeSync(fg);