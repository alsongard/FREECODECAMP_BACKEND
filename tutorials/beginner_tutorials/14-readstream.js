/**
 * createReadStream is used to read a file in chunks 
 */
const {createReadStream} = require("node:fs")

const stream = createReadStream("./content/big.txt", {highWaterMark:90000, encoding:"utf-8"})

/**
 * last buffer - remainder
 * default 64kb
 * highWaterMark - control size of the buffer
 * const stream = createReadStream("content/big.txt", {highWaterMark: 90000})
 * const stream  = createReadStream("content/big.txt", {encoding: 'utf8'})
 */
stream.on("data", (result)=>{
    console.log(result)
})