import React from 'react';
import Card from './Card/Card';
import data from '../../data';

function Vegetarian() {

    return (
        <div>
            <h2>Prova</h2>
            <div key={data.id}>
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