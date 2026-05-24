import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { useState,useEffect } from 'react';

export default function Contact(){

    const [show, setShow] = useState(false);
    
    useEffect(() => {
        setShow(true);
    }, []);

    return(
        <div className={` font-mono pt-10 bg-gradient-to-l from-purple-700 to-sky-300 flex h-screen flex-col gap-10 items-center h-12/12
                        transition-all duration-300
                        ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
            <div className={`text-3xl p-2 rounded-lg bg-gray-950
                            transition-all duration-500 delay-300
                            ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}> {/*part 1*/}
                <span className="text-slate-50 font-semibold">Contact </span>
                <span className="text-blue-500 font-extralight">Me</span>
            </div>
            <div className={`min-w-screen h-screen px-10 mt-4 flex flex-row items-center justify-center gap-2
                            transition-all duration-700 delay-500
                            ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}> {/*part 2*/}
                <a href="https://www.facebook.com/profile.php?id=100088162999110" className='p-3 bg-slate-50 rounded-full hover:bg-blue-600 transition cursor-pointer'>
                            <FaFacebook className="h-6 w-6 md:w-16 md:h-16"/>
                        </a>
                         <a href="https://www.instagram.com/g.allets/" className='p-3 bg-slate-50 rounded-full hover:bg-red-500 transition cursor-pointer'>
                            <FaInstagram className="h-6 w-6 md:w-16 md:h-16"/>
                        </a>
                        <a href="https://wa.me/6285822916469" className='p-3 bg-slate-50 rounded-full hover:bg-green-500 transition cursor-pointer'>
                            <FaWhatsapp className="h-6 w-6 md:w-16 md:h-16"/>
                        </a>
                        <a href="mailto:gamlielatahalele02@gmail.com" className='p-3 bg-slate-50 rounded-full hover:bg-red-500 transition cursor-pointer'>
                            <MdOutlineMail className="h-6 w-6 md:w-16 md:h-16"/>
                        </a>
            </div>
        </div>
    )
}