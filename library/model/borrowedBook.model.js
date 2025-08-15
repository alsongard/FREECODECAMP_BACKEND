const mongoose = require("mongoose");


const BookBorrowedSchema = new mongoose.Schema({
    bookId:{type:mongoose.Types.ObjectId, required:true, ref:"Book"},
    userId:{type:mongoose.Types.ObjectId, required:true, ref:"User"} ,
    dateofBorrowing:{type:Date, required:true},
    returnedState: {type:Boolean},
    dateofReturn:{type:Date, required:true},
},
{
    timestamps:true
})

const BorrowedBook = mongoose.model("BorrowedBook", BookBorrowedSchema)

module.exports = BorrowedBook;