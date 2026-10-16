import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api";

export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const loadClasses = async () => {
    const response = await api.get("/classes");
    setClasses(response.data);
  };

  useEffect(() => {
    loadClasses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (editingId) {
        await api.put(`/classes/${editingId}`, form);
      } else {
        await api.post("/classes", form);
      }

      setForm({ name: "", description: "" });
      setEditingId(null);
      loadClasses();
    } catch (error) {
      setError(error.response?.data?.message || "Gagal menyimpan");
    }
  };

  const editClass = (item) => {
    setEditingId(item._id);
    setForm({
      name: item.name,
      description: item.description || "",
    });
  };

  const deleteClass = async (id) => {
    if (!confirm("Hapus kelas ini?")) return;

    try {
      await api.delete(`/classes/${id}`);
      loadClasses();
    } catch (error) {
      setError(error.response?.data?.message || "Gagal menghapus");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Manage Kelas</h1>

        {error && (
          <div className="mt-4 bg-red-100 text-red-700 p-3 rounded-lg">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-6 bg-white rounded-xl shadow p-6 grid md:grid-cols-3 gap-4"
        >
          <input
            placeholder="Nama kelas"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border rounded-lg px-4 py-3"
          />

          <input
            placeholder="Deskripsi"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            className="border rounded-lg px-4 py-3"
          />

          <div className="flex gap-2">
            <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
              {editingId ? "Update" : "Tambah"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setForm({ name: "", description: "" });
                }}
                className="bg-slate-200 px-5 py-3 rounded-lg"
              >
                Batal
              </button>
            )}
          </div>
        </form>

        <div className="mt-6 bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-4">Nama</th>
                <th className="p-4">Deskripsi</th>
                <th className="p-4">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {classes.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.description}</td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => editClass(item)}
                      className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteClass(item._id)}
                      className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
