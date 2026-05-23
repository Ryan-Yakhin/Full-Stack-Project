import Gami from "../assets/gami.jpeg"
import { useEffect } from "react";
import { useState } from "react";

export default function About(){

    const [show, setShow] = useState(false);

        useEffect(() => {
        setShow(true);
    }, []);

    return(
        <div id="about" className={`bg-gradient-to-l from-purple-700 to-sky-300 min-h-screen flex flex-col gap-10 items-center h-12/12
                                    transition-all duration-300
                                ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
            <div className="pt-10"> {/*part 1*/}
                <h1 className={`bg-gray-950 py-2 px-4 rounded-md text-3xl font-mono mt-4
                                transition-all duration-500 delay-200
                                ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                                    <span className="font-semibold text-slate-50">About </span>
                                    <span className="font-extralight text-blue-500">Me</span>
                                </h1>
            </div>
            <div className={`bg-slate-200 text-slate-50 m-10 rounded-xl shadow-xl  md:pl-10 flex flex-col md:flex-row items-center md:items-start gap-10
                            transition-all duration-700 delay-300
                            ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>{/*part 2*/}
                <div className="mt-10 md:mt-20 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 aspect-square flex-shrink-0  rounded-full overflow-hidden border-2 border-black">
                    <img
                        src={Gami}
                        alt=""
                        className=" w-full h-full object-cover"
                    />
                </div>
                <div className="flex text-gray-950 flex-col font-mono pl-4 pb-10 pr-4 md:pr-0 md:pl-10">
                    <span className="w-full text-center text-2xl font-semibold pb-2 md:pt-10">Gamliela Stella Tahalele</span>
                    <span className="font-semibold ">Pengalaman</span>
                    <span>Freelance Social Media Editor – Toko Aella Cosmetic (10 Juli - 8 November 2024)</span>
                    <div className="flex flex-col pl-4 font-extralight text-xs text-gray-800">
                        <span>• Membuat perencanaan konten mingguan untuk Instagram & E-Commerce</span>
                        <span>• Mendesain postingan feed Instagram</span>
                        <span>• Menulis caption dan teks promosi yang menarik</span>
                        <span>• Meningkatkan tingkat interaksi melalui strategi posting yang konsisten</span>
                        <span>• Membantu dalam peningkatan branding dan identitas visual</span>
                    </div>
                    <br />
                    <span>Tim Pembuatan Video Vlog Kreatif - SMA N 6 Ambon (15 - 17 Agustus 2023)</span>
                    <div className="flex flex-col pl-4 font-extralight text-xs text-gray-800">
                        <span>•  Bertanggung jawab dalam membuat konsep dan mengedit video vlog kreatif sesuai dengan tema yang ditetapkan.</span>
                        <span>•  Berhasil mendapatkan juara 1 dalam lomba pembuatan video vlog kreatif</span>
                        <span>•  Bertindak sebagai coordinator tim dan memiliki 1 anggota tim.</span>
                    </div>
                    <br />
                    <div>
                         <span className="font-semibold">Pendidikan</span>
                        <div className="flex flex-col font-extralight text-xs pl-4 text-gray-800">
                            <span>• Universitas Pattimura Ambon (2024 – Sekarang)</span>
                            <span>• Jurusan: Manajemen </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}