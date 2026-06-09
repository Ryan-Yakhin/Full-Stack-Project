import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

import p1 from "../assets/gunung.jpg";
import p2 from "../assets/mount.jpg";
import p3 from "../assets/jampat.jpg";
import p4 from "../assets/bali.jpg";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
       name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      alert("Register berhasil");

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Register gagal"
      );
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50">

      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">

        <img
          src={p1}
          alt=""
          className="absolute top-10 left-10 w-64 md:w-80 lg:w-96 rounded-3xl rotate-[-12deg] opacity-80 blur-[1px]"
        />

        <img
          src={p2}
          alt=""
          className="absolute top-24 right-8 md:right-20 w-60 md:w-72 lg:w-80 rounded-3xl rotate-[10deg] opacity-80 blur-[1px]"
        />

        <img
          src={p3}
          alt=""
          className="absolute bottom-24 left-6 md:left-24 w-60 md:w-72 lg:w-80 rounded-3xl rotate-[8deg] opacity-80 blur-[1px]"
        />

        <img
          src={p4}
          alt=""
          className="absolute bottom-10 right-10 w-64 md:w-80 lg:w-96 rounded-3xl rotate-[-10deg] opacity-80 blur-[1px]"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4">

        <div className="text-center mb-8">
          <h1 className="text-5xl font-black tracking-widest text-orange-500">
            SKUY
          </h1>

          <p className="text-gray-300 mt-2">
            Buat akun dan mulai bagikan pengalaman wisatamu.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="
            w-full
            max-w-md
            bg-white/95
            backdrop-blur-md
            rounded-3xl
            shadow-2xl
            p-8
          "
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Daftar
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Nama
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama"
              className="
                w-full
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
              "
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukkan email"
              className="
                w-full
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
              "
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Masukkan password"
              className="
                w-full
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
              "
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Konfirmasi Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Ulangi password"
              className="
                w-full
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
              "
              required
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              bg-orange-500
              hover:bg-orange-600
              text-white
              py-3
              rounded-xl
              font-semibold
              transition
            "
          >
            Daftar
          </button>

          <p className="text-center mt-5 text-gray-600">
            Sudah punya akun?{" "}
            <Link
              to="/"
              className="text-orange-500 font-semibold"
            >
              Masuk
            </Link>
          </p>
        </form>

      </div>
    </div>
  );
}