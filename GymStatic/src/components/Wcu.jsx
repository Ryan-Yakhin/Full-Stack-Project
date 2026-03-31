import React from 'react'
import whc1 from '../assets/wcu1.jpg'
import whc2 from '../assets/wcu2.jpg'
import whc3 from '../assets/wcu3.jpg'

const Wcu = () => {
    return (
        <div className='bg-linear-to-b from-black via-gray-800 to-black py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Heading Section */}
                <div className='text-center mb-12'>
                    <h2 className='text-2xl sm:text-4xl lg:text-5xl font-extrabold bg-linear-to-r from-pink-300 via-indigo-300 to-teal-300 text-transparent bg-clip-text'>
                        Why Choose Us?
                    </h2>
                    <p className='mt-4 text-gray-300 text-sm sm:text-base lg:text-lg font-light'>
                        Discover why stand out with quality, comitment and result.
                    </p>
                </div>

                {/* Content Section */}
                <div className='flex flex-col lg:flex-row items-start gap-12'>
                    {/* Left Section */}
                    <div className='lg:w-1/2 w-full'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 -ml-2 sm:-ml-4 lg:-ml-6 xl:-ml-8'>
                            {
                                [
                                    {
                                        title: "Expert Trainer",
                                        text: "Highly qualified trainers to help you achive your goals."
                                    },
                                    {
                                        title: "Modern Equipment",
                                        text: "Access to state-of-the-art fitness machines and tools."
                                    },
                                    {
                                        title: "Award Winning",
                                        text: "Recognized for excellence in fitness servicess."
                                    },
                                    {
                                        title: "Community Driven",
                                        text: "A supportive community that motivates you."
                                    },
                                ].map((box, index)=>(
                                    <div key={index} className='relative flex flex-col justify-center items-center space-x-4 p-6 bg-linear-to-r from-pink-100 via-purple-100 to-indigo-100 text-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'>
                                        <h4 className='font-extrabold text-lg sm:text-xl text-center'>{box.title}</h4>
                                        <p className='text-sm sm:text-md font-light text-center'>{box.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className='lg:w-1/2 w-full'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                            {/* TWO VERTICAL IMAGES */}
                            <div className='grid grid-rows-2 gap-6'>
                                <img src={whc1} alt="img1" loading='lazy' className='w-full h-full object-cover rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300'/>
                                <img src={whc2} alt="img2" loading='lazy' className='w-full h-full object-cover rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300'/>
                            </div>

                            {/* HORIZONTAL IMAGE */}
                            <div className='w-full'>
                                <img src={whc3} alt="img3" loading='lazy' className='w-full h-full object-cover rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300'/>
                            </div>    
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Wcu