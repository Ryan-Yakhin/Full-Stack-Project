import express from 'express';

const app = express();

app.get("/", (req,res) => {
    res.send("its started")
})

app.listen(5002, ()=>{
    console.log("Server movie tracked is started at http://localhost:5002")
})