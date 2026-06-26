import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { supabase } from "../config/supabase";

import toast from "react-hot-toast";

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
      toast.error("All field Required !");
      return;
    }


    try {

      setLoading(true);

      let imageUrl = null;


      // Upload image
      if (image) {

        // cek tipe file
      if(!image.type.startsWith("image")){

          toast.error(
            "File must be img"
          );

        return;

      }

      // cek ukuran file
      if(image.size > 5 * 1024 * 1024){

        toast.error(
         "Maximum file size is 5MB"
        );

        return;

      }

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


      toast.success(
        "Post Successfully posted"
      );

      navigate("/profile");


    } catch (error) {

      console.log(error);

      toast.error(
        error.response?.data?.message ||
        "Failed to create post"
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
            Add a Tourism Place
          </h1>

          <button
            onClick={() => navigate("/profile")}
            className="
              text-slate-400
              hover:text-white
              transition
            "
          >
            ← Back
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
              Tourism Picture
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

              Select Picture

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
              Place Name
            </label>

            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ex: Mount Bromo"
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
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us about the place..."
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
              Category
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
                Select Category
              </option>

              <option value="Mount">
                Mount
              </option>

              <option value="Beach">
                Beach
              </option>

              <option value="Water Fall">
                Water Fall
              </option>

              <option value="Culture">
                Culture
              </option>

            </select>

          </div>



          {/* Location */}
          <div>

            <label className="block font-semibold mb-2">
              Location
            </label>


            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Ex: West Java"
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
              : "Publish Tourism Place"
            }

          </button>


        </form>

      </div>

    </div>
  );
}