const mongoose = require(mongoose);

const productSchema = mongoose.Schema(
    {
        name: {
            type : string,
            required  : [true, "Please entr Product name"]
        },
        quantify: {
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