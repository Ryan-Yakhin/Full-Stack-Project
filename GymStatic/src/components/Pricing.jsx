import React from 'react';

const Pricing = () => {

    const [isYearly, setIsYearly] = React.useState(false);

    const plans =[
        {
            name: "Beginner Plan",
            monthly: 500,
            yearly: 5000,
            description: "Ideal for beginners looking to get started with fitness.",
            features: [
                { text: "Access to basic gym equipment", available: true },
                { text: "1 Personal training session", available: true },
                { text: "Dietary consultation", available: false },
                { text: "Access to Premium Classes", available: false }
            ],
        },
        {
            name: "Premium Plan",
            monthly: 800,
            yearly: 8500,
            description: "Perfect for those committed to their fitness journey.",
            features: [
                { text: "Access to basic gym equipment", available: true },
                { text: "Weekly personal training session", available: true },
                { text: "Dietary consultation", available: false },
                { text: "Access to Premium Classes", available: true }
            ],
        },
        {
            name: "Pro Plan",
            monthly: 1000,
            yearly: 10000,
            description: "Perfect for those committed to their fitness journey.",
            features: [
                { text: "Unlimited access to gym equipment", available: true },
                { text: "Daily personal training session", available: true },
                { text: " Advanced Dietary consultation", available: true },
                { text: "Access to Premium Classes", available: true }
            ],
        }
    ]

    return (
        <div className='bg-linear-to-b from-black via-gray-900 to-black py-12 px-4 md:px-8 lg:px-16'>
            <div>
                <h2 className='text-5xl font-extrabold bg-linear-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text text-center py-2'>Pricing Plan</h2>
                <p className='text-center text-gray-300 mt-4'>Choose the perfect plan for your fitness journey.</p>
            </div>

            {/*Toggle Button*/}
            <div className='flex justify-center gap-4 mb-12'>
                <button className={`px-6 py-3 font-semibold text-lg rounded-full ${!isYearly ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}
                    onClick={() => setIsYearly(false)}>Monthly</button>
                <button className={`px-6 py-3 font-semibold text-lg rounded-full ${isYearly ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}
                    onClick={() => setIsYearly(true)}>Yearly</button>
            </div>

            {/*Pricing Cards*/}
            <div className='flex flex-wrap justify-center gap-6'>
                {plans.map((plan, index) => (
                    <div key={index} className={`relative border-4 hover:shadow-2xl hover:border-purple-600 max-w-sm w-full bg-gray-800 p-8 rounded-2xl shadow-lg transform transition-all duration-500 
                        ${index==1 ? "hover:scale-105 bg-gray-700" : "border-2 border-gray-700"} 
                        hover:scale-105 hover:shadow-2xl hover:border-purple-500`}>
                            <h3 className='text-2xl font-bold text-white mb-4'>{plan.name}</h3>
                            <p className='text-gray-400 mb-6'>{plan.description}</p>
                            <div className='text-4xl font-extrabold text-white mb-6'>
                                ${isYearly ? plan.yearly : plan.monthly} {' '}
                                <span className='text-lg font-medium text-gray-400'>{isYearly ? '/year' : '/month'}</span>
                            </div>
                            <ul className='space-y-3 mb-6'>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className='flex items-center gap-3'>
                                            {feature.available ? (
                                                <span className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white'>
                                                &#x2713;
                                            </span>
                                        ): (<span className='w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white'>
                                                &#x2717;
                                        </span>)}
                                        <span className='text-gray-300'>{feature.text}</span>
                                    </li>
                                ))}    
                            </ul>
                            <button className='w-full bg-purple-600 text-white py-3 rounded-full font-semibold text-xl hover:bg-purple-700 '>Choose Plan</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;