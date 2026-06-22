import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { useNavigate } from "react-router-dom"; 

import toast from "react-hot-toast";

import p1 from "../assets/gunung.jpg";
import p2 from "../assets/mount.jpg";
import p3 from "../assets/jampat.jpg";
import p4 from "../assets/bali.jpg";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await api.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

     navigate("/profile");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Login gagal"
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
          className="absolute top-10 left-10 w-64 md:w-80 lg:w-96 rounded-3xl rotate-[-12deg] opacity-80 blur-[1px] shadow-2xl"
        />

        <img
          src={p2}
          alt=""
          className="absolute top-24 right-8 md:right-20 w-60 md:w-72 lg:w-80 rounded-3xl rotate-[10deg] opacity-80 blur-[1px] shadow-2xl"
        />

        <img
          src={p3}
          alt=""
          className="absolute bottom-24 left-6 md:left-24 w-60 md:w-72 lg:w-80 rounded-3xl rotate-[8deg] opacity-80 blur-[1px] shadow-2xl"
        />

        <img
          src={p4}
          alt=""
          className="absolute bottom-10 right-10 w-64 md:w-80 lg:w-96 rounded-3xl rotate-[-10deg] opacity-80 blur-[1px] shadow-2xl"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">

        {/* Branding */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl text-white font-light">
            Selamat Datang di
          </h2>

          <h1 className="text-6xl font-black tracking-widest text-orange-500 drop-shadow-lg">
            SKUY
          </h1>

          <p className="mt-3 text-gray-300 max-w-md">
            Temukan destinasi wisata terbaik dan bagikan pengalamanmu kepada traveler lainnya.
          </p>
        </div>

        {/* Login Card */}
        <form
          onSubmit={handleSubmit}
          className="
            w-full
            max-w-md
            bg-white/95
            backdrop-blur-md
            rounded-3xl
            p-8
            shadow-2xl
          "
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Masuk
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              <span>Email</span> <br />
              <span>(Silahkan Register, tidak menggunakan Email asli !)</span>
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
            />
          </div>

          <div className="mb-6">
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
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-semibold
              py-3
              rounded-xl
              transition
            "
          >
            Login
          </button>

          <p className="text-center text-gray-600 mt-5">
            Belum punya akun?{" "}
            <Link
              to="/register"
              className="text-orange-500 font-semibold"
            >
              Register
            </Link>
          </p>
        </form>

      </div>
    </div>
  );
}