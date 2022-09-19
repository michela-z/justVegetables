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
        </div>
    )
}

export default Home;