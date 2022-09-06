import React from 'react';
import Navbar from '../components/Navbar';
//import Vegan from '../components/Vegan';
//import Vegetarian from '../components/Vegetarian';
import Prova from '../components/Prova';

function Home() {

    return (
        <div>
            <Navbar />
            <div className="main-container">
                <Prova />
                {/* <Vegetarian />
                <Vegan /> */}
            </div>
        </div>
    )
}

export default Home;