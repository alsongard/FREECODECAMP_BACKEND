const {readFile} = require('node:fs');

const getText = (path)=>{
    return new Promise ((resolve, reject)=>{
        readFile(path, "utf-8", (err, data)=>{
            if (err){
                console.log(err);
            }
            else{
                console.log(data);
            }
        })
    })
};

getText("./first.txt")
    .then((data) => console.log(data))
    .then((err) => console.log(err));

// const getText = (path)=>{
//     return new Promise((resolve, reject)=>
//     {
//         readFile(path, "utf-8", (err, result)=>{
//             if (err){
//                 console.log(err);
//             }
//             else {
//                 console.log(result);
//             }
//         })
//     })
// }

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))
    