import { useEffect, useState } from 'react';

const API = 'http://localhost:5000/api/products';
const emptyForm = { name: '', price: '', stock: '' };

export default function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // READ: ambil data saat komponen pertama kali tampil
  const fetchProducts = async () => {
    try {
      const res = await fetch(API);
      setProducts(await res.json());
    } catch {
      setError('Gagal mengambil data. Pastikan backend berjalan.');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // CREATE & UPDATE: satu form, dibedakan oleh editingId
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const url = editingId ? `${API}/${editingId}` : API;
    const method = editingId ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        price: Number(form.price),
        stock: Number(form.stock || 0),
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      return setError(data.message);
    }

    setForm(emptyForm);
    setEditingId(null);
    fetchProducts();
  };

  // Isi form dengan data yang akan diedit
  const handleEdit = (p) => {
    setEditingId(p._id);
    setForm({ name: p.name, price: p.price, stock: p.stock });
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm('Hapus produk ini?')) return;
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    fetchProducts();
  };

  // EXTERNAL API: minta backend mengimpor dari DummyJSON
  const handleImport = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API}/import`, { method: 'POST' });
      if (!res.ok) throw new Error((await res.json()).message);
      fetchProducts();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>CRUD Produk</h1>

      {error && <p style={{ color: 'crimson' }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input name="name" placeholder="Nama" value={form.name} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Harga" value={form.price} onChange={handleChange} required />
        <input name="stock" type="number" placeholder="Stok" value={form.stock} onChange={handleChange} />
        <button type="submit">{editingId ? 'Update' : 'Tambah'}</button>
        {editingId && (
          <button type="button" onClick={() => { setEditingId(null); setForm(emptyForm); }}>
            Batal
          </button>
        )}
      </form>

      <button onClick={handleImport} disabled={loading} style={{ marginBottom: 16 }}>
        {loading ? 'Mengimpor...' : 'Import dari DummyJSON'}
      </button>

      <table width="100%" border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr><th>Gambar</th><th>Nama</th><th>Harga</th><th>Stok</th><th>Aksi</th></tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.image && <img src={p.image} alt={p.name} width="50" />}</td>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button onClick={() => handleEdit(p)}>Edit</button>{' '}
                <button onClick={() => handleDelete(p._id)}>Hapus</button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr><td colSpan="5" align="center">Belum ada data</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}