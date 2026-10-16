import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>

        <p className="text-slate-600 mt-2">
          Selamat datang di Sistem Manajemen Sekolah.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          
            <Link to="/students">
                <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition hover:scale-105 hover:bg-gray-950 hover:text-white">
                    <p className="font-bold">Siswa</p>
                    <p className="text-slate-500 mt-2">Kelola data siswa.</p>
                </div>
            </Link>

            <Link to="/classes">
                <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition hover:scale-105 hover:bg-gray-950 hover:text-white">
                    <p className="font-bold">Kelas</p>
                    <p className="text-slate-500 mt-2">Kelola data kelas.</p>
                </div>
            </Link>

            <Link to="/teachers">
                <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition hover:scale-105 hover:bg-gray-950 hover:text-white">
                    <p className="font-bold">Guru</p>
                    <p className="text-slate-500 mt-2">Kelola data guru.</p>
                </div>
            </Link>
        </div>
      </main>
    </div>
  );
}
