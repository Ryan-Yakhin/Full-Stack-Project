const mongoose = require('mongoose');

const connectDB = async()=>{
    await mongoose.connect(process.env.CONNECTION_URL)
    .then(()=>console.log("Connected to MongoDB"))
}

module.exports = connectDB;