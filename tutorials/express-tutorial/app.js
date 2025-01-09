const express = require("express");
// const {people}  = require("./new_data.js");
const app = express();
const path = require("path");
const exp = require("constants");
const { type } = require("os");

const people = require("./routes/people.js")
const auth = require("./routes/auth.js");

// console.log(people);
// console.log(typeof(people))
// console.log(module);
app.use(express.static(path.join(__dirname, "methods_public")));  // middleware used for static pages
app.use(express.urlencoded({extended: false})); // middleware used for traditional form
app.use(express.json()) // another inbuilt middleware used for javascript form



app.use("/api/people", people);
app.use("/login", auth);


app.listen(5000, ()=>{
    console.log("Listenning on port 5000...");
});