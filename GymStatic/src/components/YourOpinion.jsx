import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import {CircleChevronLeft, CircleChevronRight} from 'lucide-react';

const reviews = [
    {
        name: 'Dilan',
        text: 'FitLife Gym has transformed my fitness journey!',
        stars: 4.5,
        color: "text-blue-500",
    },
    {
        name: 'Simon',
        text: 'Great gym! The atmosphere is motivating.',
        stars: 4,
        color: "text-purple-500",
    },
    {
        name: 'Agus',
        text: 'I love this gym! The equipment is well-maintained.',
        stars: 4.5,
        color: "text-blue-500",
    },
    {
        name: 'Santi',
        text: 'Fantastic place! Clean facilities and helpful trainers.',
        stars: 4.5,
        color: "text-yellow-500",
    },
];

const YourOpinion = () => {
    return (
        <div id='opinions' className='bg-gradient-to-b from-black via-gray-900 to-black min-h-screen py-12 px-6'>
            
            <div className='text-center mb-10'>
                <h2 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 py-10'>
                    Community Opinion
                </h2>
                <p className='text-gray-400 text-lg mt-2'>
                    What people think about us
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {reviews.map((review, index) => (
                    <div 
                        key={index} 
                        className='bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:-translate-y-2'
                    >
                        <FaQuoteLeft className={`${review.color} text-3xl`} />

                        <h3 className='text-xl font-semibold text-white mt-4'>
                            {review.name}
                        </h3>

                        <div className='flex items-center mt-2 mb-4 text-yellow-400 text-xl'>
                            {[...Array(Math.floor(review.stars))].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                            {review.stars % 1 !== 0 && <FaStarHalfAlt />}
                        </div>

                        <p className='text-gray-400 text-sm italic'>
                            {review.text}
                        </p>

                        <FaQuoteRight className={`${review.color} text-3xl mt-4 float-right`} />
                    </div>
                ))}
            </div>

            {/* Navigation Add Opinion  */}
            <div className='mt-10 flex flex-col items-center space-y-6'>
                <div className='flex items-center space-x-4'>
                    <button className='p-3 bg-linear-to-r from-gray-700 to-gray-800 rounded-full 
                    shadow hover:bg-linear-to-r hover:from-gray-800 hover:to-gray-900 
                    transition-transform duration-300 transform hover:scale-110'>
                        <CircleChevronLeft/>
                    </button>
                    <button className='p-3 bg-linear-to-r from-gray-700 to-gray-800 rounded-full 
                    shadow hover:bg-linear-to-r hover:from-gray-800 hover:to-gray-900 
                    transition-transform duration-300 transform hover:scale-110'>
                        <CircleChevronRight/>
                    </button>
                </div> 

                {/* Add Opinion */}
                <button className='bg-linear-to-r from-blue-500 to-purple-600 text-white
                px-10 py-4 rounded-full shadow-xl hover:from-blue-600 hover:to-purple-700
                transform hover:scale-110 trasition-transform duration-300'>
                    +Add Your Opinion
                </button>
            </div>
        </div>
    )
}

export default YourOpinion;