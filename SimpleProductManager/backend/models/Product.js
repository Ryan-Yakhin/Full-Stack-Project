const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Nama wajib diisi'], trim: true },
    price: { type: Number, required: [true, 'Harga wajib diisi'], min: 0 },
    stock: { type: Number, default: 0, min: 0 },
    image: { type: String, default: '' },
  },
  { timestamps: true } // otomatis menambah createdAt & updatedAt
);

module.exports = mongoose.model('Product', productSchema);