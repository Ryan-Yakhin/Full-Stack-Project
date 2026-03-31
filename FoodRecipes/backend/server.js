const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectDB = require('./config/connectioDB');

const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json())

app.use("/recipe",require("./routes/recipe"))

app.listen(PORT,(err)=>{
    console.log(`App is Listening on port ${PORT}`)
})