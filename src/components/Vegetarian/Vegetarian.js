import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Vegetarian.css';
import { getRecipes } from "../../api";


//import data from '../../data';

function Vegetarian() {

    const [recipes, setRecipes] = useState([]);
    const [offset, setOffset] = useState(0);

    const urlParams = 'vegetarian';
    
    // //const URL = `https://api.spoonacular.com/recipes/complexSearch?query=vegetarian&apiKey=d2c828e2a18c4b53871971851c1f1a77&number=1`;

    useEffect(() => {
        getRecipes(urlParams, offset)
            .then((response) => {
                setRecipes(response.data.results);
            })
    },[offset])
    
    return (
        <div className='vegetarian' >
            <h2>Vegetarian Recipes</h2>
            <button className="button" onClick={() => setOffset((prev) => prev + 1)}>Load More</button>
            <div className='card-container'>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <Card title={recipe.title} image={recipe.image} id={recipe.id} recipes={recipes}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Vegetarian;