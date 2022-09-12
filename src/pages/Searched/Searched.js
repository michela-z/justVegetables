import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import './Searched.css';

function Serched() {
    
    const [searched, setSearched] = useState([]);
    let params = useParams();

    useEffect(() => {
        getSearched(params.search);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);

    const getSearched = (name) => {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&diet=vegetarian&apiKey=4396840b109d4699afe6f0788f2ed9ff`)
        .then((response) => {
            setSearched(response.data.results);
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <Navbar />
            <div className='main-container searched-cnt'>
                <div className='searched-title'>
                    <h2>{params.search} recipes</h2>
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