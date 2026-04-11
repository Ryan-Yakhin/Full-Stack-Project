/*const mongoose = require('mongoose');

const connectDB = async()=>{
    //await mongoose.connect(process.env.CONNECTION_URL)
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Connected to MongoDB"))
}

module.exports = connectDB;*/

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;