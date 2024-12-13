const util = require('node:util');
const {readFile, writeFile} = require('node:fs');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async()=>{
    try{
        const first = await readFilePromise("../content/first.txt", "utf-8");
        const second = await readFilePromise("../content/second.txt", "utf-8");
        await writeFilePromise("../content/result-mind-grenade.txt", "hello there");
        console.log(first, second);
    }
    catch(error)
    {
        console.log(error)
    }
}
start();