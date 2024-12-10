const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name: {type: String, require: true},
        image: {type: String, require: true},
        description: {type: String, require: true},
        rating: {type: Number, require: true},
        numReview: {type: Number, require: true},
        price: {type: Number, require: true},
        countInStock: {type: Number, require: true},
    }
)

module.exports = mongoose.model("Product", ProductSchema);