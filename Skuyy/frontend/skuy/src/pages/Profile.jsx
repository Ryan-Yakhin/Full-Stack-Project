import {useState, useEffect} from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

import pp from "../assets/pp.jpg";

export default function Profile() {
  
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
      return;
    }

    fetchProfile();
    fetchPosts();
  }, []);

  async function fetchProfile() {
      try {
      const token =
        localStorage.getItem("token");

      const response = await api.get(
        "/users/profile",
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

  async function fetchPosts(){

  try{

    const token =
    localStorage.getItem("token");


    const response =
    await api.get(
      "/posts/user",
      {
        headers:{
          Authorization:
          `Bearer ${token}`
        }
      }
    );

    console.log(response.data);
    setPosts(response.data);

  }catch(error){

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

  async function handleDelete(id){

    const confirmDelete =
    confirm(
      "Yakin ingin menghapus postingan?"
    );


    if(!confirmDelete)
        return;


    try{

        const token =
        localStorage.getItem("token");


        await api.delete(
            `/posts/${id}`,
            {
                headers:{
                    Authorization:
                    `Bearer ${token}`
                }
            }
        );


        setPosts(
            posts.filter(
                post=>post.id !== id
            )
        );


    }catch(error){

        console.log(error);

    }

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
              src={user.profile_picture || pp}
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

      {/* Postingan Saya */}
      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-6">
          Postingan Saya
        </h2>

        {
            posts.length === 0 ? (

              <div className="
                bg-slate-900
                rounded-2xl
                p-10
                text-center
                text-slate-400
              ">

                <p>
                  Belum ada postingan wisata.
                </p>

                <button
                  onClick={() =>
                    navigate("/create-post")
                  }

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
            ) : (
              <div>
                <div className="
                grid
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
              ">

                {
                  posts.map((post)=>(
                    <div
                      key={post.id}
                      className="
                        bg-slate-900
                        rounded-2xl
                        overflow-hidden
                      "
                    >
                      <img
                        src={post.img_url}
                        alt={post.title}
                        className="
                          h-52
                          w-full
                          object-cover
                        "
                      />

                      <div className="p-5">
                        <h3 className="
                          text-xl
                          font-bold
                        ">
                          {post.title}
                        </h3>

                        <p className="
                          text-slate-400
                          mt-2
                        ">
                          {post.location}
                        </p>

                        <span className="
                          inline-block
                          mt-3
                          bg-orange-500
                          px-3
                          py-1
                          rounded-full
                          text-sm
                        ">
                          {post.category}
                        </span>

                        <div className="flex gap-3 mt-4">

                          <button
                            onClick={() => navigate(`/edit-post/${post.id}`)}
                            className="flex-1 bg-blue-500 hover:bg-blue-600 py-2 rounded-xl transition"
                          >
                            Edit 
                          </button>

                          <button
                            onClick={() => handleDelete(post.id)}
                            className="flex-1 bg-red-500 hover:bg-red-600 py-2 rounded-xl transition"
                          >
                            Hapus
                          </button>

                        </div>

                      </div>
                    </div>
                    
                  ))
                }
                
              </div>
              
                <button
                  onClick={() =>
                    navigate("/create-post")
                  }

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
            )
          }
          <button 
          onClick={() => navigate("/home")}
          
          className="mt-4
                    bg-orange-500
                    hover:bg-orange-600
                    px-6
                    py-2
                    rounded-xl
                    text-white
                  ">
            Beranda
          </button>
      </div>
    </div>
  </div>
  );
}