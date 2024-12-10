const express = require("express");
const app = express();

const dotenv = require("dotenv");
const products = require("./data/Product");
const connectDB = require("./config/db")
dotenv.config();
connectDB();

const PORT = process.env.PORT;

//api product test route
app.get("/api/products", (req, res) => {
    res.json({products})
})

app.get("/api/products/:id", (req, res) => {
    const product = products.find((product) => product.id === req.params.id);
    res.json(product)
})

app.listen(PORT || 9000, () => {
    console.log(`Server listening on port ${PORT}`)
})