import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Vegan from '../components/Vegan/Vegan';
import Vegetarian from '../components/Vegetarian/Vegetarian';

function Home() {

    return (
        <div>
            <Navbar />
            <div className="main-container">
                <Vegetarian />
                <Vegan />
            </div>
            <p className='info'>Developed by <a href='https://michela-z.github.io/'>Michela Zallocco</a></p>
        </div>
    )
}

export default Home;