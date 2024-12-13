const {readFile} = require('node:fs')


const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, "utf-8", (err, data)=>{
            if (err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
};


const start = async()=>{
    try{
        const first = await getText("../content/first.txt");
        const second = await getText("../content/second.txt");
        console.log(first, second);

    }
    catch(err){
        console.log(err);
    }
}

start();