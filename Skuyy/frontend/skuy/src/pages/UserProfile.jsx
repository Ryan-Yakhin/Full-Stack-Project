import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import api from "../services/api";

export default function UserProfile(){

    const {id}=useParams();

    const [user,setUser]=useState(null);
    const [posts,setPosts]=useState([]);

    useEffect(()=>{

        fetchUser();

    },[]);

    async function fetchUser(){

        try{

            const response =
            await api.get(`/users/${id}`);

            setUser(response.data.user);

            setPosts(response.data.posts);

        }catch(error){

            console.log(error);

        }

    }

    if(!user){

        return <div>Loading...</div>;

    }

    return(

        <div className="min-h-screen bg-slate-950 text-white p-6">
            <div className="max-w-5xl mx-auto">
                <div className="bg-slate-900 rounded-3xl p-8 flex items-center gap-6">
                    <img
                        src={user.profile_picture || "https://i.pravatar.cc/200"}
                        alt={user.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-orange-500"
                    />

                    <div>
                      <h1 className="text-3xl font-bold">{user.name}</h1>
                      <p className="text-slate-400">{user.email}</p>
                      <p className="mt-3">{user.bio}</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-5">
                  Postingan
                </h2>

                <div className="grid md:grid-cols-3 gap-5">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-slate-900 rounded-xl overflow-hidden"
                    >
                      <img
                        src={post.img_url}
                        alt={post.title}
                        className="h-48 w-full object-cover"
                      />

                      <div className="p-4">
                        <h3 className="font-bold">{post.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </div>

    );

}