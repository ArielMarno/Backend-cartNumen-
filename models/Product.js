const mongoose = require("mongoose");

const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    url: { type: String, required: [true]},
    name: { type: String, required: [true], unique: [true] },
    price: { type: Number, required: [true] }
});

const Products = mongoose.model("Product", productSchema);

module.exports = Products;