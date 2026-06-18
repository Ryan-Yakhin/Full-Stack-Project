import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Home(){

  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    fetchPosts();
  },[]);

  async function fetchPosts(){

    try{

      const response = await api.get("/posts");

      setPosts(response.data);

    }catch(error){

      console.log(error);

    }

  }

  // Filter pencarian
  const filteredPosts = posts.filter((post)=>{

    const keyword = search.toLowerCase();

    return (
      post.title?.toLowerCase().includes(keyword) ||
      post.location?.toLowerCase().includes(keyword) ||
      post.category?.toLowerCase().includes(keyword) ||
      post.name?.toLowerCase().includes(keyword)
    );

  });

  return(

    <div className="
      min-h-screen
      bg-slate-950
      text-white
      p-6
    ">


      <div className="
        max-w-6xl
        mx-auto
      ">

        {/* Header */}

        <div className="
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
          items-center
          mb-8
        ">

          <h1 className="
            text-4xl
            font-bold
          ">
            Jelajahi Wisata
          </h1>

          <button
            onClick={()=>navigate("/profile")}
            className="
              bg-orange-500
              px-5
              py-2
              rounded-xl
              hover:bg-orange-600
            "
          >
            Profile
          </button>


        </div>

        {/* Search */}

        <div className="mb-8">
          <input

            type="text"

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

            placeholder="
              Cari wisata, lokasi, kategori...
            "

            className="
              w-full
              bg-slate-900
              border
              border-slate-700
              rounded-xl
              p-4
              outline-none
              focus:border-orange-500
            "
          />

        </div>

        {/* Post List */}

        {
          filteredPosts.length === 0 ? (

            <div className="
              bg-slate-900
              rounded-2xl
              p-10
              text-center
              text-slate-400
            ">

              Tidak ada wisata ditemukan

            </div>

          ) : (

            <div className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            ">

              {
                filteredPosts.map((post)=>(

                  <div

                    key={post.id}

                    className="
                      bg-slate-900
                      rounded-3xl
                      overflow-hidden
                      shadow-xl
                      hover:scale-[1.02]
                      transition
                    "

                  >

                    <img

                      src={
                        post.img_url ||
                        "https://via.placeholder.com/500"
                      }

                      alt={post.title}

                      className="
                        h-[500px]
                        w-full
                        object-cover
                      "

                    />

                    <div className="p-5">

                      {/* User */}

                      <div className="
                        flex
                        items-center
                        gap-3
                        mb-4
                      ">

                        <img

                          src={
                            post.profile_picture ||
                            "https://i.pravatar.cc/100"
                          }

                          className="
                            w-10
                            h-10
                            rounded-full
                            object-cover
                          "

                        />

                        <p className="
                          text-slate-300
                        ">

                          {post.name}

                        </p>

                      </div>

                      <h2 className="
                        text-2xl
                        font-bold
                      ">

                        {post.title}

                      </h2>

                      <p className="
                        text-slate-400
                        mt-2
                      ">

                        {post.location}

                      </p>

                      <p className="
                        text-slate-300
                        mt-3
                        line-clamp-3
                      ">

                        {post.description}

                      </p>

                      <span className="
                        inline-block
                        mt-4
                        bg-orange-500
                        px-3
                        py-1
                        rounded-full
                        text-sm
                      ">

                        {post.category}

                      </span>

                    </div>

                  </div>

                ))
              }

            </div>

          )
        }

      </div>

    </div>

  );

}