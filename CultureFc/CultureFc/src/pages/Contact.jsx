import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";

export default function Contact(){
    return(
        <div className="bg-slate-50 font-mono h-[calc(100vh-200.98px)]">
        <h1 className="pt-10 flex items-center justify-center text-3xl font-bold ">Contact Us</h1>
        <div className="pb-10 mt-4 flex flex-row place-items-center justify-center minscreen"> {/*Part 2*/}
                  
            <a href="https://www.facebook.com/ryan.kogoya/" className='p-3 bg-slate-50 rounded-full hover:bg-blue-600 transition cursor-pointer'>
                <FaFacebook className="h-20 w-20"/>
            </a>
                <a href="https://www.instagram.com/aku_ryannn/" className='p-3 bg-slate-50 rounded-full hover:bg-red-500 transition cursor-pointer'>
                <FaInstagram className="h-20 w-20"/>
            </a>
            <a href="https://wa.me/6281219946735" className='p-3 bg-slate-50 rounded-full hover:bg-green-500 transition cursor-pointer'>
                <FaWhatsapp className="h-20 w-20"/>
            </a>
            <a href="mailto:ryanyakhin4@gmail.com" className='p-3 bg-slate-50 rounded-full hover:bg-red-500 transition cursor-pointer'>
                <MdOutlineMail className="h-20 w-20"/>
            </a>
        </div>
        </div>
        
    )
}