import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api";

export default function Reports() {
  const [data, setData] = useState([]);

  const loadReport = async () => {
    const response = await api.get("/reports/summary");
    setData(response.data);
  };

  useEffect(() => {
    loadReport();
  }, []);

  const getRowCount = (item) => {
    return Math.max(item.students.length, item.teachers.length, 1);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Laporan Siswa, Kelas, dan Guru</h1>

        <div className="mt-6 bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-4">Kelas</th>
                <th className="p-4">Siswa</th>
                <th className="p-4">NIS</th>
                <th className="p-4">Guru</th>
                <th className="p-4">NIP</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => {
                const rowCount = getRowCount(item);

                return Array.from({ length: rowCount }).map((_, index) => {
                  const student = item.students[index];
                  const teacher = item.teachers[index];

                  return (
                    <tr key={`${item.class._id}-${index}`} className="border-b">
                      {index === 0 && (
                        <td
                          rowSpan={rowCount}
                          className="p-4 font-semibold align-top bg-slate-50"
                        >
                          {item.class.name}
                        </td>
                      )}

                      <td className="p-4">{student?.name || "-"}</td>

                      <td className="p-4">{student?.nis || "-"}</td>

                      <td className="p-4">{teacher?.name || "-"}</td>

                      <td className="p-4">{teacher?.nip || "-"}</td>
                    </tr>
                  );
                });
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
