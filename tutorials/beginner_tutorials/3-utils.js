const names = require("./4-names.js"); // this is common js but it might be converted into ES MODULE
const sayHi = require("./5-func.js");
const userItems = require("./4-names.js") //this is an arrays
// console.log(sayHi);
console.log(names);

sayHi(names.laboratory);
sayHi(names.technicial);
sayHi(names.lecture);



console.log(`Item number : ${userItems.items[0]}`)



