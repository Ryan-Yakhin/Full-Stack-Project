import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [form, setForm] = useState({
    name: "",
    nip: "",
    classId: "",
  });
  const [editingId, setEditingId] = useState(null);

  const loadData = async () => {
    const [teacherResponse, classResponse] = await Promise.all([
      api.get("/teachers"),
      api.get("/classes"),
    ]);

    setTeachers(teacherResponse.data);
    setClasses(classResponse.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await api.put(`/teachers/${editingId}`, form);
    } else {
      await api.post("/teachers", form);
    }

    setForm({ name: "", nip: "", classId: "" });
    setEditingId(null);
    loadData();
  };

  const editTeacher = (item) => {
    setEditingId(item._id);

    setForm({
      name: item.name,
      nip: item.nip,
      classId: item.classId?._id || "",
    });
  };

  const deleteTeacher = async (id) => {
    if (!confirm("Hapus guru ini?")) return;

    await api.delete(`/teachers/${id}`);
    loadData();
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Manage Guru</h1>

        <form
          onSubmit={handleSubmit}
          className="mt-6 bg-white rounded-xl shadow p-6 grid md:grid-cols-4 gap-4"
        >
          <input
            placeholder="Nama guru"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border rounded-lg px-4 py-3"
          />

          <input
            placeholder="NIP"
            value={form.nip}
            onChange={(e) => setForm({ ...form, nip: e.target.value })}
            className="border rounded-lg px-4 py-3"
          />

          <select
            value={form.classId}
            onChange={(e) => setForm({ ...form, classId: e.target.value })}
            className="border rounded-lg px-4 py-3"
          >
            <option value="">Pilih kelas</option>
            {classes.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>

          <button className="bg-blue-600 text-white rounded-lg px-5 py-3 hover:bg-blue-700">
            {editingId ? "Update" : "Tambah"}
          </button>
        </form>

        <div className="mt-6 bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-4">Nama</th>
                <th className="p-4">NIP</th>
                <th className="p-4">Kelas</th>
                <th className="p-4">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.nip}</td>
                  <td className="p-4">{item.classId?.name}</td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => editTeacher(item)}
                      className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTeacher(item._id)}
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
