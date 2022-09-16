import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Vegan from '../components/Vegan/Vegan';
import Vegetarian from '../components/Vegetarian/Vegetarian';

//import Prova from '../components/Prova';

function Home() {

    return (
        <div>
            <Navbar />
            <div className="main-container">
                <Vegetarian />
                <Vegan />
                {/* <Prova /> */}
            </div>
        </div>
    )
}

export default Home;