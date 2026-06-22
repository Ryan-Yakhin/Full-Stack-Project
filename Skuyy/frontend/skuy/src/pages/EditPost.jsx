import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";

import api from "../services/api";
import { supabase } from "../config/supabase";

export default function EditPost(){

    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        title:"",
        description:"",
        category:"",
        location:""
    });

    const [image,setImage] = useState(null);
    const [preview,setPreview] = useState(null);

    const [loading,setLoading] = useState(false);

    useEffect(()=>{

        fetchPost();

    },[]);

    async function fetchPost(){

        try{
            const token = localStorage.getItem("token");

            const response = await api.get(
              `/posts/${id}`,
              {
                headers:{
                  Authorization:`Bearer ${token}`
                }
              }
            );

            setPost(response.data);

        }catch(error){
            console.log(error);
        }
    }

    function handleChange(e){

        setFormData({

            ...formData,

            [e.target.name]:
            e.target.value

        });

    }

    function handleImage(e){

        const file =
        e.target.files[0];

        if(!file) return;

        setImage(file);

        setPreview(
            URL.createObjectURL(file)
        );

    }

    async function handleSubmit(e){

        e.preventDefault();

        try{

            setLoading(true);

            let imgUrl = preview;

            // Jika user upload gambar baru
            if(image){

                // cek tipe file
                if(!image.type.startsWith("image")){

                    toast.error(
                      "File harus berupa gambar"
                    );

                  return;

                }

                // cek ukuran file
                if(image.size > 5 * 1024 * 1024){

                    toast.error(
                     "Ukuran gambar maksimal 5MB"
                    );

                    return;

                }

                const fileName =
                `${Date.now()}-${image.name}`;

                const {error} =
                await supabase.storage
                .from("profile-pictures")
                .upload(
                    fileName,
                    image
                );

                if(error)
                    throw error;

                imgUrl =
                `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/profile-pictures/${fileName}`;

            }

            const token =
            localStorage.getItem("token");

            await api.put(

                `/posts/${id}`,

                {
                    ...formData,
                    img_url:imgUrl
                },

                {

                    headers:{

                        Authorization:
                        `Bearer ${token}`

                    }

                }

            );

            toast.success(
                "Postingan berhasil diperbarui"
            );

            navigate("/profile");

        }catch(error){

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Gagal update post"
            );

        }finally{

            setLoading(false);

        }

    }

    return(

        <div
        className="
            min-h-screen
            bg-slate-950
            text-white
            p-6
        "
        >

            <div
            className="
                max-w-3xl
                mx-auto
            "
            >

                <div
                className="
                    flex
                    justify-between
                    items-center
                    mb-8
                "
                >

                    <h1
                    className="
                        text-3xl
                        font-bold
                    "
                    >
                        Edit Wisata
                    </h1>

                    <button

                    onClick={() =>
                        navigate("/profile")
                    }

                    className="
                        text-slate-400
                        hover:text-white
                    "
                    >

                        ← Kembali

                    </button>

                </div>

                <form

                onSubmit={handleSubmit}

                className="
                    bg-slate-900
                    rounded-3xl
                    p-8
                    space-y-6
                "

                >

                    {/* Preview */}

                    <div>


                        <label
                        className="
                            block
                            mb-3
                            font-semibold
                        "
                        >
                            Foto Wisata
                        </label>

                        {
                            preview &&

                            <img

                            src={preview}

                            alt="preview"

                            className="
                                w-full
                                h-72
                                object-cover
                                rounded-2xl
                                mb-4
                            "

                            />

                        }

                        <input

                        type="file"

                        accept="image/*"

                        onChange={handleImage}

                        className="
                            text-sm
                        "

                        />

                    </div>

                    {/* Title */}

                    <div>

                        <label className="block mb-2">
                            Nama Tempat
                        </label>


                        <input

                        name="title"

                        value={formData.title}

                        onChange={handleChange}

                        className="
                            w-full
                            bg-slate-800
                            border
                            border-slate-700
                            p-4
                            rounded-xl
                            outline-none
                        "

                        />

                    </div>

                    {/* Description */}

                    <div>

                        <label className="block mb-2">
                            Deskripsi
                        </label>


                        <textarea

                        name="description"

                        value={formData.description}

                        onChange={handleChange}

                        rows="5"

                        className="
                            w-full
                            bg-slate-800
                            border
                            border-slate-700
                            p-4
                            rounded-xl
                            resize-none
                        "

                        />


                    </div>

                    {/* Category */}

                    <div>


                        <label className="block mb-2">
                            Kategori
                        </label>

                        <select

                        name="category"

                        value={formData.category}

                        onChange={handleChange}

                        className="
                            w-full
                            bg-slate-800
                            border
                            border-slate-700
                            p-4
                            rounded-xl
                        "

                        >

                            <option value="">
                                Pilih kategori
                            </option>

                            <option value="Gunung">
                                Gunung
                            </option>

                            <option value="Pantai">
                                Pantai
                            </option>

                            <option value="Air Terjun">
                                Air Terjun
                            </option>

                            <option value="Budaya">
                                Budaya
                            </option>

                        </select>

                    </div>

                    {/* Location */}

                    <div>

                        <label className="block mb-2">
                            Lokasi
                        </label>

                        <input

                        name="location"

                        value={formData.location}

                        onChange={handleChange}

                        className="
                            w-full
                            bg-slate-800
                            border
                            border-slate-700
                            p-4
                            rounded-xl
                        "
                        />

                    </div>

                    <button

                    disabled={loading}

                    className="
                        w-full
                        bg-orange-500
                        hover:bg-orange-600
                        disabled:bg-orange-300
                        py-4
                        rounded-xl
                        font-bold
                    "
                    >

                        {
                            loading
                            ?
                            "Menyimpan..."
                            :
                            "Simpan Perubahan"
                        }

                    </button>

                </form>


            </div>


        </div>

    );

}