import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

function Vegetarian() {

    const [vegetarian, setVegetarian] = useState([]);
    const [offset, setOffset] = useState(0);

    const baseURL = `https://api.spoonacular.com/recipes/complexSearch?query=vegetarian&apiKey=9547a05f38b94e7098b26ab63cd24f9d&number=6&offset=${offset}`;

    const getVegetarian = () => {
        axios.get(baseURL)
        .then((response) => {
            setVegetarian(response.data.results);
        })
        .catch(error => console.log(error))
    }

    function increaseNumber() {
        setOffset(prevNumber => prevNumber + 5)
    }

    useEffect(() => {
        getVegetarian();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset]);

    return (
        <div className='vegetarian' >
            <h2>Vegetarian Recipes</h2>
            <button className="button" onClick={increaseNumber}>Load More</button>
            <div className='card-container' key={vegetarian.id}>
            {vegetarian.map(recipe => (
                <div key={recipe.id}>
                        <Card title={recipe.title} image={recipe.image} id={recipe.id}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Vegetarian;