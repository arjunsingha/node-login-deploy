console.log("I am in the express project")

const express = require("express");
const cors = require('cors')

const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

const dotenv = require("dotenv").config()

connectDB();//db connection

const app = express()

const port = process.env.PORT || 5000;

app.use(express.json()) //middleware
app.use(cors()) 
app.use("/api/users", require("./routes/userRoutes.js"))
app.use(errorHandler)



app.listen(
    port,
    ()=>console.log(`Express running on port : ${port}`)
)