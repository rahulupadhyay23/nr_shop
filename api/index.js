const express = require("express");
const app = express();

const dotenv = require("dotenv");
const products = require("./data/Product");
const connectDB = require("./config/db")
dotenv.config();
connectDB();

const PORT = process.env.PORT;


const databaseSeeder = require('./seeder')
//database seeder route
app.use('/api/seed', databaseSeeder);


app.listen(PORT || 9000, () => {
    console.log(`Server listening on port ${PORT}`)
})