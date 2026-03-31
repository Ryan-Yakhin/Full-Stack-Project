import React from 'react';
import MOT1 from '../assets/1.jpg'
import MOT2 from '../assets/2.jpg'
import MOT3 from '../assets/3.jpg'
import MOT4 from '../assets/4.jpg'
import MOT5 from '../assets/5.jpg'
import MOT6 from '../assets/6.jpg'

const trainers = [MOT1, MOT2, MOT3, MOT4, MOT5, MOT6];
const Mot = () => {
    return (
        <div className='bg-linear-to-b from-black via-gray-800 to-black py-12' id="trainers">
           <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Heading Section */}
                <div className='text-center mb-10 px-4'>
                    <h2 className='text-2xl sm:text-4xl lg:text-5xl font-extrabold bg-linear-to-r from-pink-300 via-indigo-300 to-teal-300 text-transparent bg-clip-text'>
                        Meet Our Trainers
                    </h2>
                    <p className='mt-4 text-gray-300 text-sm sm:text-base lg:text-lg font-light'>
                        Our professional trainers are here to inspire and guide you on your fitness journey, ensuring you achieve your goals with confidence and care.
                    </p>    
                </div>

                {/* Trainers Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {trainers.map((imgSrc, index) => (
                        <div key={index} className='group relative overflow-hidden rounded-xl shadow-lg bg-linear-to-br from-gray-800 to-gray-900 transition-transform transform hover:scale-105 hover:shadow-2xl'>
                            {/*Lazy Loading*/}
                            <img src={imgSrc} alt={'Trainer ${index+1}'} className='w-full aspect-3/2 object-cover transition-transform duration-500 ease-out group-hover:scale-110'/>

                            {/*Overlay*/}
                            <div className='absolute inset-0 bg-linear-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                                <div className='text-white'>
                                    <h3 className='text-lg md:text-xl font-bold text-white mb-1'>Trainer {index + 1}</h3>
                                    <p className='text-sm text-gray-300'>Certified Fitness Professional</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

           </div>
        </div>
    );
};

export default Mot;