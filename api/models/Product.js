const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        image: {type: String, required: true},
        description: {type: String, required: true},
        rating: {type: Number, required: true},
        numReview: {type: Number, required: true},
        price: {type: Number, required: true},
        countInStock: {type: Number, required: true},
    }
)

module.exports = mongoose.model("Product", ProductSchema);