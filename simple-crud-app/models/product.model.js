const mongoose = require('mongoose');


const productSchema = new mongoose.Schema(
    {
        name: {
            type : String,
            required  : [true, "Please enter Product name"]
        },
        quantity: {
            type: Number,
            required : true,
            default : 0
        },
        price: {
            type: Number,
            required: true,
            default:0
        },
        image: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timeStamp: true
    }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;