import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { supabase } from "../config/supabase";

export default function CreatePost() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: ""
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);


  // Handle input
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }


  // Handle image
  function handleImage(e) {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  }


  // Submit post
  async function handleSubmit(e) {

    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.category ||
      !formData.location
    ) {
      alert("Semua data harus diisi");
      return;
    }


    try {

      setLoading(true);

      let imageUrl = null;


      // Upload image
      if (image) {

        const fileName =
          `${Date.now()}-${image.name}`;


        const { error } =
          await supabase.storage
            .from("profile-pictures")
            .upload(fileName, image);


        if (error) throw error;


        imageUrl =
          `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/profile-pictures/${fileName}`;

      }


      const token =
        localStorage.getItem("token");


      // Save post database
      await api.post(
        "/posts",
        {
          ...formData,
          img_url: imageUrl
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );


      alert("Postingan berhasil dibuat");

      navigate("/profile");


    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Gagal membuat postingan"
      );


    } finally {

      setLoading(false);

    }

  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold">
            Tambah Wisata
          </h1>

          <button
            onClick={() => navigate("/profile")}
            className="
              text-slate-400
              hover:text-white
              transition
            "
          >
            ← Kembali
          </button>

        </div>


        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="
            bg-slate-900
            p-8
            rounded-3xl
            shadow-xl
            space-y-6
          "
        >


          {/* Image */}
          <div>

            <label className="block font-semibold mb-3">
              Foto Wisata
            </label>


            {preview && (
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
            )}


            <label
              className="
                inline-block
                cursor-pointer
                bg-slate-800
                hover:bg-slate-700
                px-5
                py-3
                rounded-xl
                transition
              "
            >

              Pilih Foto

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="hidden"
              />

            </label>

          </div>



          {/* Title */}
          <div>

            <label className="block font-semibold mb-2">
              Nama Tempat
            </label>

            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Contoh: Gunung Bromo"
              className="
                w-full
                bg-slate-800
                border
                border-slate-700
                focus:border-orange-500
                outline-none
                p-4
                rounded-xl
              "
            />

          </div>



          {/* Description */}
          <div>

            <label className="block font-semibold mb-2">
              Deskripsi
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Ceritakan tentang tempat wisata..."
              className="
                w-full
                bg-slate-800
                border
                border-slate-700
                focus:border-orange-500
                outline-none
                p-4
                rounded-xl
                resize-none
              "
            />

          </div>



          {/* Category */}
          <div>

            <label className="block font-semibold mb-2">
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
                focus:border-orange-500
                outline-none
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

            <label className="block font-semibold mb-2">
              Lokasi
            </label>


            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Contoh: Jawa Timur"
              className="
                w-full
                bg-slate-800
                border
                border-slate-700
                focus:border-orange-500
                outline-none
                p-4
                rounded-xl
              "
            />

          </div>



          {/* Button */}
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
              text-lg
              transition
            "
          >

            {loading
              ? "Uploading..."
              : "Publikasikan Wisata"
            }

          </button>


        </form>

      </div>

    </div>
  );
}