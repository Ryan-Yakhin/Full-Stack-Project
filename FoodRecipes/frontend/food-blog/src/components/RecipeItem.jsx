import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Home from '../assets/home.png'
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";

export default function RecipeItem() {
    const allRecipes = useLoaderData();
    console.log(allRecipes);
    return (
        <>
        <div className='card-container'>
            {
                allRecipes?.map((item, index) => {
                    return (
                        <div key={index} className='card'>
                            <img src= {Home} width={120} height={100}/>
                            <div className='card-body'>
                                <div className='title'>{item.title}</div>
                                <div className='icons'>
                                   <div className='time'><BsFillStopwatchFill />30min</div> 
                                   <FaHeart />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    );
}
