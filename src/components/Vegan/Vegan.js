import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Vegan.css';
import { getRecipes } from "../../api";


function Vegan() {

    const [recipes, setRecipes] = useState([]);
    const [offset, setOffset] = useState(0);

    const urlParams = 'vegan';

    useEffect(() => {
        getRecipes(urlParams, offset)
            .then((response) => {
                setRecipes(response.data.results);
            })
    },[offset])

    return (
        <div className='vegan' >
            <h2>Vegan Recipes</h2>
            <button className="button" onClick={() => {setOffset((prev) => prev + 1)}}>Load More</button>
            <div className='card-container'>
            {recipes.map(recipe => (
                <div key={recipe.id}>
                        <Card title={recipe.title} image={recipe.image} id={recipe.id}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Vegan;