const admin = "Ms. Susan";
const technicial = "Mr. Esau";
const laboratory = "Mrs. Dorcas";
const lecture = "Mr. Swalah"

console.log(module); // returns an object

//return only filename, path and paths
console.log(`Display only path property from module : \n \t ${module.path}`);
console.log(`Display only filename property from module : \n \t ${module.filename}`);


const paths = module.paths;
console.log("Displaying from paths array of module.paths is: ");
paths.forEach((element) => {
    console.log(element);
});


//explicity export the 3 variables technical, laboratory and lecture
module.exports = {technicial, laboratory, lecture};