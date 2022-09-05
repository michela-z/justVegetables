import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function Vegan() {

    const [vegan, setVegan] = useState([]);
    const [offset, setOffset] = useState(0);

    const baseURL = `https://api.spoonacular.com/recipes/complexSearch?query=vegan&apiKey=873a9af930914788b72c98c1ade20d2f&number=2&offset=${offset}`;

    const getVegan = () => {
        axios.get(baseURL)
        .then((response) => {
            setVegan(response.data.results);
        })
        .catch(error => console.log(error))
    }

    function increaseNumber() {
        setOffset(prevNumber => prevNumber + 5)
    }

    useEffect(() => {
        getVegan();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset]);

    return (
        <div className='vegan' >
            <h2>Vegan Recipes</h2>
            <button className="button" onClick={increaseNumber}>Load More</button>
            <div className='card-container'>
            {vegan.map(recipe => (
                <div key={recipe.id}>
                        <Card title={recipe.title} image={recipe.image} id={recipe.id}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Vegan