import React from 'react';
import Card from './Card';
import data from '../../data';

function Prova() {

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

export default Prova;