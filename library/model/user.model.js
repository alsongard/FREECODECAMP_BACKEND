const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
    userName: {require:true, type:String},
    admissionNumber: {require:true, type:String},
    bookNumberBorrowed: {type:Number, default:0},
    password: {require:true, type:String}
},
{
    timestamps:true
})

const User = mongoose.model("User", UserSchema);

module.exports = User;
