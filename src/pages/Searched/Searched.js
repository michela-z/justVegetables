import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import { getRecipes } from "../../api";
import './Searched.css';

function Serched() {
    
    const [searched, setSearched] = useState([]);
    const [offset, setOffset] = useState(0);
    let params = useParams();

    let urlParams = params.search;

    //const URL = `https://api.spoonacular.com/recipes/complexSearch?query=${params.search}&diet=vegetarian&apiKey=d2c828e2a18c4b53871971851c1f1a77`;

    useEffect(() => {
        getRecipes(urlParams, offset)
            .then((response) => {
                setSearched(response.data.results);
            })
    },[params, offset])

    return (
        <div>
            <Navbar />
            <div className='main-container searched-cnt'>
                <div className='searched-title'>
                    <h2>{params.search} recipes</h2>
                    <button className="button" onClick={() => {setOffset((prev) => prev + 1)}}>Load More</button>
                </div>
                <div className='searched'>
                    {searched.map((item) => {
                        return (
                            <Card title={item.title} image={item.image} key={item.id} id={item.id}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Serched;