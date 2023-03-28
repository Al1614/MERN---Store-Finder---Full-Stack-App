const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: [true, "Store name is required"],
        minlength: [3, "Store name must be at least 3 characters long"]
    },
    number:{
        type: Number,
        required: [true, "Store number is required"],
        minlength: [1, "Store number must be at least greater than 0"]
    },
    open:{
        type: String,
    }
}, {timestamps: true});

const Store = mongoose.model("Store", StoreSchema)

module.exports = Store;