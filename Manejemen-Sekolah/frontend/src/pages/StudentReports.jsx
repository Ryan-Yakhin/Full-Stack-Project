import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api";

export default function StudentReports() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadReport = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await api.get("/studentreports");
      if (
        !Array.isArray(response.data) ||
        !response.data.every(
          (item) => item?.class && Array.isArray(item.students)
        )
      ) {
        throw new Error("Format data laporan siswa tidak valid.");
      }

      setData(response.data);
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ||
          requestError.message ||
          "Gagal memuat laporan siswa."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadReport();
  }, []);

  const getRowCount = (item) => {
    return Math.max(item.students.length, 1);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Laporan Siswa</h1>

        <div className="mt-6 bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-4">Kelas</th>
                <th className="p-4">Siswa</th>
                <th className="p-4">NIS</th>
              </tr>
            </thead>

            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="3" className="p-4 text-center text-slate-500">
                    Memuat laporan siswa...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="3" className="p-4 text-center text-red-600">
                    {error}{" "}
                    <button
                      onClick={loadReport}
                      className="font-semibold underline"
                    >
                      Coba lagi
                    </button>
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td colSpan="3" className="p-4 text-center text-slate-500">
                    Belum ada data laporan siswa.
                  </td>
                </tr>
              ) : (
                data.map((item) => {
                  const rowCount = getRowCount(item);

                  return Array.from({ length: rowCount }).map((_, index) => {
                    const student = item.students[index];

                    return (
                      <tr
                        key={`${item.class._id}-${index}`}
                        className="border-b"
                      >
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
                      </tr>
                    );
                  });
                })
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
