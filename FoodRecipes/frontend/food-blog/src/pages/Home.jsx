import React from 'react';
import HomeImg from '../assets/Home.png'
import RecipeItem from '../components/RecipeItem';

const Home = () => {
  return (
    <>
        <section className='home'>
            <div className='left'>
                <h1>Food Recipe</h1>
                <h5>
                    Welcome to our food recipe website! We are passionate about sharing delicious and easy-to-follow recipes that will inspire you to cook and enjoy meals at home. Whether you're a beginner or an experienced cook, we have something for everyone. From quick weeknight dinners to indulgent desserts, our collection of recipes is designed to satisfy your cravings and make cooking a joyful experience. Join us on this culinary journey and discover new flavors, techniques, and dishes that will delight your taste buds. Happy cooking!
                </h5>
                <button>Share your recipe</button>
            </div>
            <div className='right'>
                <img src = {HomeImg} width= {370} height= {350} alt='food' />
            </div>
        </section>
        
        <div className='bg'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,192L40,186.7C80,181,160,171,240,160C320,149,400,139,480,160C560,181,640,235,720,224C800,213,880,139,960,96C1040,53,1120,43,1200,80C1280,117,1360,203,1400,245.3L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>

        <div className='recipe'>
            <RecipeItem/>
        </div>
    </>
  );
};

export default Home;
