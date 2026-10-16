import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {location.pathname !== "/" && (
            <Link
              to="/"
              aria-label="Kembali ke Dashboard"
              title="Kembali ke Dashboard"
              className="rounded-lg p-2 hover:bg-slate-800"
            >
              <FaArrowLeft aria-hidden="true" className="h-5 w-5" />
            </Link>
          )}
          <Link to="/" className="font-bold text-xl">
            Manajemen Sekolah
          </Link>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <Link to="/studentreports">Laporan Siswa</Link>
          <Link to="/teacherreports">Laporan Guru</Link>
          <Link to="/reports">Laporan Lengkap</Link>

          <span className="hidden md:inline text-slate-300">{user?.name}</span>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
