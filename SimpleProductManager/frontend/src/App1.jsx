import { useState, useEffect } from "react";

const KEY = "crud-barang";

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [
    { id: 1, nama: "Buku Tulis", harga: 5000 },
    { id: 2, nama: "Pulpen", harga: 3000 },
  ];
}

const css = `
.wrap{max-width:720px;margin:0 auto;padding:24px 16px;font-family:system-ui,sans-serif}
.wrap h1{font-size:1.4rem;margin:0 0 16px}
.card{border:1px solid #d1d5db;border-radius:12px;padding:16px;margin-bottom:16px}
.card form{display:flex;gap:8px;flex-wrap:wrap}
.card input{flex:1 1 140px;padding:9px 11px;border:1px solid #d1d5db;border-radius:8px;font-size:1rem}
.card button{padding:9px 14px;border:0;border-radius:8px;background:#2563eb;color:#fff;cursor:pointer}
.card button.ghost{background:transparent;color:inherit;border:1px solid #d1d5db}
.card button.del{background:#dc2626}
.table-wrap{overflow-x:auto}
.table-wrap table{width:100%;border-collapse:collapse}
.table-wrap th,.table-wrap td{text-align:left;padding:10px 8px;border-bottom:1px solid #e5e7eb;white-space:nowrap}
.table-wrap td.act{display:flex;gap:6px}
.empty{text-align:center;padding:20px;color:#6b7280}
`;

export default function App1() {
  const [items, setItems] = useState(load);
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch (e) {}
  }, [items]);

  const reset = () => {
    setNama("");
    setHarga("");
    setEditId(null);
  };

  // CREATE & UPDATE
  const submit = (e) => {
    e.preventDefault();
    if (!nama.trim() || harga === "") return;

    if (editId === null) {
      setItems([...items, { id: Date.now(), nama: nama.trim(), harga: Number(harga) }]);
    } else {
      setItems(
        items.map((i) =>
          i.id === editId ? { ...i, nama: nama.trim(), harga: Number(harga) } : i
        )
      );
    }
    reset();
  };

  // siapkan form untuk edit
  const edit = (i) => {
    setEditId(i.id);
    setNama(i.nama);
    setHarga(i.harga);
  };

  // DELETE
  const hapus = (id) => {
    setItems(items.filter((i) => i.id !== id));
    if (editId === id) reset();
  };

  return (
    <div className="wrap">
      <style>{css}</style>
      <h1>CRUD Sederhana React</h1>

      <div className="card">
        <form onSubmit={submit}>
          <input
            placeholder="Nama barang"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <input
            type="number"
            placeholder="Harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
          <button type="submit">{editId === null ? "Tambah" : "Simpan"}</button>
          {editId !== null && (
            <button type="button" className="ghost" onClick={reset}>
              Batal
            </button>
          )}
        </form>
      </div>

      <div className="card table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.id}>
                <td>{i.nama}</td>
                <td>Rp {i.harga.toLocaleString("id-ID")}</td>
                <td className="act">
                  <button className="ghost" onClick={() => edit(i)}>Edit</button>
                  <button className="del" onClick={() => hapus(i.id)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {items.length === 0 && <div className="empty">Belum ada data.</div>}
      </div>
    </div>
  );
}
