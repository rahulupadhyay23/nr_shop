const express = require("express");
const app = express();

const dotenv = require("dotenv");
const products = require("./data/Product");
const connectDB = require("./config/db")
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const databaseSeeder = require('./seeder');
const userRoute = require('./routes/userRoutes');

dotenv.config();
connectDB();

const PORT = process.env.PORT;
app.use(express.json());

//database seeder route
app.use('/api/seed', databaseSeeder);

// user route
app.use('/api/users', userRoute)


app.use(notFound);
app.use(errorHandler);

app.listen(PORT || 9000, () => {
    console.log(`Server listening on port ${PORT}`)
})