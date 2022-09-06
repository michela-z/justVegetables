import React, { useState, useEffect } from 'react';
import Card from './Card';
import data from '../../data';

function Vegetarian() {

    //const [vegetarian, setVegetarian] = useState([]);
    //const [offset, setOffset] = useState(0);

    // const baseURL = `https://api.spoonacular.com/recipes/complexSearch?query=vegetarian&apiKey=8612837edd0c4698bf751b0c706cfa8d&number=6&offset=${offset}`;

    // const getVegetarian = () => {
    //     axios.get(baseURL)
    //     .then((response) => {
    //         setVegetarian(response.data.results);
    //     })
    //     .catch(error => console.log(error))
    // }

    // function increaseNumber() {
    //     setOffset(prevNumber => prevNumber + 5)
    // }

    // useEffect(() => {
    //     getVegetarian();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [offset]);

    return (
        <div className='vegetarian' >
            <h2>Prova</h2>
            <div className='card-container' key={data.id}>
            {data.map(recipe => (
                <div key={recipe.id}>
                        <Card title={recipe.title} image={recipe.image} id={recipe.id}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Vegetarian;