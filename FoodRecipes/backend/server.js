/*const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/connectioDB');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.use("/",require("./routes/user"))
app.use("/recipe",require("./routes/recipe"))

app.listen(PORT,(err)=>{
    console.log(`App is Listening on port ${PORT}`)
})*/

const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/connectionDB');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(cors({
    origin: "*"
}));

app.use(express.static('public'));

app.use("/", require("./routes/user"));
app.use("/recipe", require("./routes/recipe"));

app.listen(PORT, () => {
    console.log(`App is Listening on port ${PORT}`);
});