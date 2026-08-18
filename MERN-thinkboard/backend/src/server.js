import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json()); // this middleware will parse json bodies : req.body
app.use(rateLimiter); // this middleware will limit the number of requests to the server

// our simple middleware to log the request method and url
// app.use((req,res,next)=>{
//     console.log(`request method is ${req.method} and req url is ${req.url}`);
//     next();
// })

app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});



