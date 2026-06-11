import {useState, useEffect} from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
      return;
    }

    fetchProfile();
  }, []);

  async function fetchProfile() {
      try {
      const token =
        localStorage.getItem("token");

      const response = await api.get(
        "/auth/profile",
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      setUser(response.data);
      console.log(response.data);
    } catch (error) {
     console.log(error);
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  if(!user){
    return <div>Loading...</div>;
  }

  return (
  <div className="min-h-screen bg-slate-950 text-white p-6">
    <div className="max-w-5xl mx-auto">

      {/* Header Profile */}
      <div className="bg-slate-900 rounded-3xl p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Avatar */}
          <div className="relative">
            <img
              src={user.profile_picture || "https://i.pravatar.cc/300"}
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-orange-500 object-cover"
            />
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold">
              {user.name}
            </h1>

            <p className="text-slate-400 mt-2">
              {user.email}
            </p>

            <p className="mt-4 text-slate-300">
              {user.bio || "Bio kosong"}
            </p>

            <div className="flex gap-3 mt-5 justify-center md:justify-start">

              <button 
                onClick={() => navigate("/edit-profile")}
                className="
                  bg-orange-500
                  hover:bg-orange-600
                  px-5
                  py-2
                  rounded-xl
                  transition
                "
              >
                Edit Profil
              </button>

              <button
                onClick={handleLogout}
                className="
                  bg-red-500
                  hover:bg-red-600
                  px-5
                  py-2
                  rounded-xl
                  transition
                "
              >
                Logout
              </button>

            </div>
          </div>

        </div>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

        <div className="bg-slate-900 p-6 rounded-2xl text-center">
          <h2 className="text-3xl font-bold text-orange-500">
            0
          </h2>
          <p className="text-slate-400">
            Postingan
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl text-center">
          <h2 className="text-3xl font-bold text-orange-500">
            0
          </h2>
          <p className="text-slate-400">
            Tempat Dikunjungi
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl text-center">
          <h2 className="text-3xl font-bold text-orange-500">
            0
          </h2>
          <p className="text-slate-400">
            Favorit
          </p>
        </div>

      </div>

      {/* Postingan Saya */}
      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-6">
          Postingan Saya
        </h2>

        <div className="bg-slate-900 rounded-2xl p-10 text-center text-slate-400">

          <p>
            Belum ada postingan wisata.
          </p>

          <button
            className="
              mt-4
              bg-orange-500
              hover:bg-orange-600
              px-6
              py-2
              rounded-xl
              text-white
            "
          >
            Tambah Postingan
          </button>

        </div>

      </div>

    </div>
  </div>
  );
}