import { useState, useEffect } from "react";
import Poto1 from "../assets/poto1.avif";
import Poto2 from "../assets/poto2.avif";
import Poto3 from "../assets/poto3.avif";
import Poto4 from "../assets/poto4.avif";
import Poto5 from "../assets/poto5.avif";
import Poto6 from "../assets/poto6.avif";
import Poto7 from "../assets/poto7.avif";
import Poto8 from "../assets/poto8.avif";
import Poto9 from "../assets/poto9.avif";
import Poto10 from "../assets/poto10.avif";
import Poto11 from "../assets/poto11.avif";
import Poto12 from "../assets/poto12.avif";

export default function Project(){
    const pic = [Poto1,Poto2,Poto3,Poto4,Poto5,Poto6];
    const pic1 = [Poto7,Poto8,Poto9,Poto10,Poto11,Poto12]
    
    const [selectedImage, setSelectedImage] = useState(null);

    const [show, setShow] = useState(false);
            useEffect(() => {
            setShow(true);
        }, []);

    return(
        <div className={`font-mono pt-10 bg-gradient-to-l from-blue-700 to-purple-700 flex flex-col min-h-screen items-center gap-10
                        transition-all duration-300
                            ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}> 
            <div className={`text-2xl place-content-center
                            transition-all duration-500 delay-300
                            ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
            <div className="bg-gray-950 rounded-md p-2">
                 <span className="font-semibold text-slate-50">My </span>
                <span className="font-extralight text-blue-500">Project</span>
            </div>
            </div>

            <div className={`flex flex-col gap-10
                            transition-all duration-700 delay-500
                            ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>

                <div className=" w-full px-10"> {/*with aellas cosmetic*/}
                <div className="text-2xl text-slate-50 font-semibold">
                    <h1>Project With Aella Cosmetic</h1>
                </div>
                <div className="grid grid-cols-3 gap-6 py-5">
                    {
                        pic.map((item,index) => (
                            <div key={index} className="shadow-xl rounded-xl overflow-hidden cursor-pointer" onClick={() => setSelectedImage(item)}>
                                <img src={item} alt="" className="w-full h-52 object-cover hover:scale-105 duration-300" />
                            </div>
                            )
                        )
                    }
                </div>
            </div>

            <div className=" w-full px-10"> {/*with aellas cosmetic*/}
                <div className="text-2xl text-slate-50 font-semibold">
                    <h1>Personal Project</h1>
                </div>
                <div className="grid grid-cols-3 gap-6 py-5">
                    {
                        pic1.map((item,index) => (
                            <div key={index} className="shadow-xl rounded-xl overflow-hidden cursor-pointer" onClick={() => setSelectedImage(item)}>
                                <img src={item} alt="" className="w-full h-52 object-cover hover:scale-105 duration-300" />
                            </div>
                            )
                        )
                    }
                </div>
            </div>

            </div>
            

            {
                selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                     <img
                            src={selectedImage}
                            alt=""
                            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
                        />
                    </div>
                )
            }
        </div>
    )
}