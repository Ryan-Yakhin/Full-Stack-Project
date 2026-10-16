const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// READ: ambil semua produk
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE: tambah produk baru
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message }); // error validasi
  }
});

// EXTERNAL API: ambil dari DummyJSON lalu simpan ke MongoDB
router.post('/import', async (req, res) => {
  try {
    const response = await fetch(
      'https://dummyjson.com/products?limit=5&select=title,price,stock,thumbnail'
    );
    if (!response.ok) throw new Error('Gagal mengambil data dari API eksternal');

    const data = await response.json();

    // Petakan field DummyJSON ke field schema kita
    const docs = data.products.map((p) => ({
      name: p.title,
      price: p.price,
      stock: p.stock,
      image: p.thumbnail,
    }));

    const saved = await Product.insertMany(docs);
    res.status(201).json({ message: `${saved.length} produk diimpor`, products: saved });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: ubah produk berdasarkan id
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,           // kembalikan data setelah diupdate
      runValidators: true, // jalankan validasi schema saat update
    });
    if (!updated) return res.status(404).json({ message: 'Produk tidak ditemukan' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: hapus produk berdasarkan id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Produk tidak ditemukan' });
    res.json({ message: 'Produk dihapus' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;