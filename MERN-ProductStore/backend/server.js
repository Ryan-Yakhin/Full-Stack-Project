import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

import ProductRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json()); // allows us to accept json data in the body

app.use("/api/products", ProductRoutes);

app.listen(PORT, ()=>{
    connectDB();
    console.log("server started at http://localhost:" + PORT);
});


