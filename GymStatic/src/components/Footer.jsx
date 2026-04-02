import React from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-linear-to-b from-black via-gray-900 to-black text-white font-poppins">
            <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Brand Section */}
                <div>
                    <h1 className='text-3xl text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600 font-extrabold tracking-wider'>
                        Fitlife Gym
                    </h1>

                    <p className='text-gray-400 mt-4 leading-relaxed'> 
                        Empowering lives through fitness and wellness. Join us on a journey to achieve a healthier and stronger version of yourself. 
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h2 className='text-2xl text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600 font-semibold'>
                        Quick Links
                    </h2>

                    <ul className='mt-4 space-y-2'>
                        <li>
                            <Link to="home" smooth duration={500} className='cursor-pointer hover:underline hover:text-gray-300'>Home</Link>
                        </li>
                        <li>
                            <Link to="opinions" smooth duration={500} className='cursor-pointer hover:underline hover:text-gray-300'>Opinions</Link>
                        </li>
                        <li>
                            <Link to="trainers" smooth duration={500} className='cursor-pointer hover:underline hover:text-gray-300'>Trainers</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth duration={500} className='cursor-pointer hover:underline hover:text-gray-300'>Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h2 className='text-2xl text-transparent bg-clip-text bg-text-transparent bg-linear-to-r
                    from-blue-400 to-purple-600 font-semibold'>
                        Follow Us
                    </h2>
                    <div className='flex mt-4 space-x-4'>
                        <a href="#" className='p-3 bg-gray-700 rounded-full hover:bg-blue-500 transition'>
                            <FaFacebook className="h-6 w-6"/>
                        </a>
                         <a href="#" className='p-3 bg-gray-700 rounded-full hover:bg-red-500 transition'>
                            <FaInstagram className="h-6 w-6"/>
                        </a>
                         <a href="#" className='p-3 bg-gray-700 rounded-full hover:bg-blue-500 transition'>
                            <FaTwitter className="h-6 w-6"/>
                        </a>
                         <a href="#" className='p-3 bg-gray-700 rounded-full hover:bg-blue-500 transition'>
                            <FaLinkedin className="h-6 w-6"/>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className='bg-gray-900 text-gray-500 text-center py-4'>
                <p>@ 2026 FitLife Gym. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;