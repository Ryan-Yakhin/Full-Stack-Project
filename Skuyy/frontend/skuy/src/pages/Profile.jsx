import { FaCamera } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-8">

      {/* Header */}
      <div className="max-w-5xl mx-auto">

        {/* Profile Card */}
        <div className="bg-slate-900 rounded-3xl p-8 shadow-xl">

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Foto Profil */}
            <div className="relative">

              <img
                src="https://i.pravatar.cc/300"
                alt="profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-orange-500"
              />

              <button
                className="
                  absolute
                  bottom-2
                  right-2
                  bg-orange-500
                  p-3
                  rounded-full
                  hover:bg-orange-600
                  transition
                "
              >
                <FaCamera />
              </button>

            </div>

            {/* Informasi User */}
            <div className="text-center md:text-left">

              <h1 className="text-3xl font-bold">
                Ryan Yakhin
              </h1>

              <p className="text-slate-400 mt-2">
                ryan@gmail.com
              </p>

              <p className="text-slate-300 mt-4 max-w-lg">
                Pecinta alam dan wisata Indonesia.
                Suka menjelajahi gunung, pantai,
                dan tempat tersembunyi.
              </p>

              <button
                className="
                  mt-5
                  bg-orange-500
                  hover:bg-orange-600
                  px-6
                  py-2
                  rounded-xl
                  transition
                "
              >
                Edit Profil
              </button>

            </div>

          </div>

        </div>

        {/* Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-orange-500">
              12
            </h2>

            <p className="text-slate-400">
              Postingan
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-orange-500">
              8
            </h2>

            <p className="text-slate-400">
              Gunung
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-orange-500">
              4
            </h2>

            <p className="text-slate-400">
              Pantai
            </p>
          </div>

        </div>

        {/* Postingan Saya */}
        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-6">
            Postingan Saya
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden hover:scale-105 transition">

              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt=""
                className="h-52 w-full object-cover"
              />

              <div className="p-4">

                <h3 className="font-bold text-xl">
                  Gunung Bromo
                </h3>

                <p className="text-slate-400">
                  Jawa Timur
                </p>

                <span
                  className="
                    inline-block
                    mt-3
                    bg-orange-500
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  "
                >
                  Gunung
                </span>

              </div>

            </div>

            {/* Card */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden hover:scale-105 transition">

              <img
                src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86"
                alt=""
                className="h-52 w-full object-cover"
              />

              <div className="p-4">

                <h3 className="font-bold text-xl">
                  Raja Ampat
                </h3>

                <p className="text-slate-400">
                  Papua Barat
                </p>

                <span
                  className="
                    inline-block
                    mt-3
                    bg-sky-500
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  "
                >
                  Pantai
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}