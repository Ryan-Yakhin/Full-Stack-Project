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
    <div className="min-h-screen overflow-hidden bg-[#101415] px-5 py-6 text-white sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(237,128,63,0.16),transparent_28%),radial-gradient(circle_at_90%_100%,rgba(64,133,119,0.14),transparent_30%)]" />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-orange-300">
              Skuyy / Community guide
            </p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-stone-50 sm:text-5xl">
              Put your favorite place on the map.
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-6 text-stone-400 sm:text-base">
              Share the view, the feeling, and the details that make a destination worth the trip.
            </p>
          </div>

          <button
            onClick={() => navigate("/profile")}
            className="shrink-0 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-stone-300 transition hover:border-orange-300/60 hover:text-white"
          >
            Back to profile
          </button>
        </header>

        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#19302d] p-7 shadow-2xl shadow-black/20 sm:p-9">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[18px] border-orange-300/10" />
            <div className="relative">
              <span className="inline-flex rounded-full bg-orange-300 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#17302d]">
                Make it memorable
              </span>
              <h2 className="mt-12 text-3xl font-black leading-tight text-stone-50">
                A good guide starts with a personal story.
              </h2>
              <p className="mt-5 text-sm leading-7 text-teal-100/70">
                Add one destination, then let other travelers discover it through your eyes.
              </p>
              <div className="mt-12 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-sm">
                <div>
                  <p className="text-2xl font-black text-orange-200">01</p>
                  <p className="mt-1 text-teal-100/60">Place story</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-orange-200">02</p>
                  <p className="mt-1 text-teal-100/60">Useful details</p>
                </div>
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-[#1a2020]/95 p-6 shadow-2xl shadow-black/25 sm:p-9">
            <div className="mb-8 flex items-end justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">New entry</p>
                <h2 className="mt-2 text-2xl font-bold text-stone-100">Tell us about it</h2>
              </div>
              <p className="text-right text-xs leading-5 text-stone-500">All fields<br />are required</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="mb-3 block text-sm font-semibold text-stone-200">Tourism picture</label>
                <label className="group relative block min-h-48 cursor-pointer overflow-hidden rounded-2xl border border-dashed border-teal-100/25 bg-[#131918] transition hover:border-orange-300/70">
                  {preview ? (
                    <img src={preview} alt="Preview of the selected tourism place" className="absolute inset-0 h-full w-full object-cover opacity-80 transition group-hover:opacity-60" />
                  ) : null}
                  <span className="relative flex min-h-48 flex-col items-center justify-center px-5 text-center">
                    <span className="mb-3 text-3xl text-orange-200">+</span>
                    <span className="font-semibold text-stone-200">{preview ? "Choose another picture" : "Add a picture of the view"}</span>
                    <span className="mt-1 text-xs text-stone-500">JPG, PNG up to 5MB</span>
                  </span>
                  <input type="file" accept="image/*" onChange={handleImage} className="hidden" />
                </label>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-stone-200">Place name</label>
                <input name="title" value={formData.title} onChange={handleChange} placeholder="e.g. Mount Bromo" className="w-full rounded-xl border border-white/10 bg-[#131918] px-4 py-3.5 text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-orange-300 focus:ring-4 focus:ring-orange-300/10" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-stone-200">Your description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows="5" placeholder="What should people know before they go?" className="w-full resize-none rounded-xl border border-white/10 bg-[#131918] px-4 py-3.5 text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-orange-300 focus:ring-4 focus:ring-orange-300/10" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-stone-200">Category</label>
                  <select name="category" value={formData.category} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-[#131918] px-4 py-3.5 text-stone-100 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-300/10">
                    <option value="">Select category</option>
                    <option value="Mount">Mount</option>
                    <option value="Beach">Beach</option>
                    <option value="Water Fall">Water Fall</option>
                    <option value="Culture">Culture</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-stone-200">Location</label>
                  <input name="location" value={formData.location} onChange={handleChange} placeholder="e.g. West Java" className="w-full rounded-xl border border-white/10 bg-[#131918] px-4 py-3.5 text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-orange-300 focus:ring-4 focus:ring-orange-300/10" />
                </div>
              </div>

              <button disabled={loading} className="w-full rounded-xl bg-orange-300 py-4 font-black text-[#17302d] transition hover:bg-orange-200 disabled:cursor-not-allowed disabled:opacity-60">
                {loading ? "Uploading..." : "Publish tourism place"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}