require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());          // izinkan request dari frontend
app.use(express.json());  // parsing body JSON

app.use('/api/products', require('./routes/products'));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB terhubung');
    app.listen(process.env.PORT, () =>
      console.log(`Server jalan di http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error('Koneksi MongoDB gagal:', err.message));