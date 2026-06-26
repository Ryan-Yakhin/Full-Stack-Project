import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { supabase } from "../config/supabase";

import toast from "react-hot-toast";

export default function EditProfile() {

  const navigate = useNavigate();

  const [image, setImage] = useState(null);

  const [preview, setPreview] = useState(null);

  function handleImage(e) {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);

    setPreview(
      URL.createObjectURL(file)
    );
  }

  const [formData, setFormData] =
    useState({
      name: "",
      bio: "",
      profile_picture: "",
    });

  useEffect(() => {
    fetchProfile();
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

      setFormData({
        name: response.data.name || "",
        bio: response.data.bio || "",
        profile_picture: response.data.profile_picture || "",
      });

    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      let imageUrl = formData.profile_picture;

      if (image) {

        const fileName =
          `${Date.now()}-${image.name}`;

        const { error } =
          await supabase.storage
           .from("profile-pictures")
           .upload(
                fileName,
                image
              );

        if (error) throw error;

        imageUrl =
         `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/profile-pictures/${fileName}`;
        }

        const token =
        localStorage.getItem("token");

        await api.put(
          "/users/profile",
          {
            name: formData.name,
            bio: formData.bio,
            profile_picture:
              imageUrl,
          },
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        toast.success(
          "Profile Successfully updated"
        );
        navigate("/profile");

    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center p-4">

      <form
        onSubmit={handleSubmit}
        className="
          bg-slate-900
          p-8
          rounded-3xl
          w-full
          max-w-lg
        "
      >

        <h1 className="text-3xl font-bold mb-8">
          Edit Profile
        </h1>

        <div className="mb-5">

          <label className="block mb-2">Profile Picture</label>
          {preview &&(
            <img src={preview} alt="" className="w-32 h-32 rounded-full object-cover mb-4"/>
          )}
          <input type="file" accept="image/*" onChange={handleImage} />

          <label className="block mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="
              w-full
              p-3
              rounded-xl
              bg-slate-800
            "
          />

        </div>

        <div className="mb-6">

          <label className="block mb-2">
            Bio
          </label>

          <textarea
            rows="5"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="
              w-full
              p-3
              rounded-xl
              bg-slate-800
            "
          />

        </div>

        <button
          type="submit"
          className="
            w-full
            bg-orange-500
            hover:bg-orange-600
            py-3
            rounded-xl
          "
        >
          Save
        </button>

      </form>

    </div>
  );
}