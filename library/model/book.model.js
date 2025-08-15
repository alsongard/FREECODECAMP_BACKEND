const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
    title: {type:String, require:true},
    genre: {type:String, enum:["Scifi", "Romance", "Education", "Religion"]},
    author: {type:String, require:true},
},
{
    timestamps:true
})


const Book = mongoose.model("Book", bookSchema);
module.exports = Book;