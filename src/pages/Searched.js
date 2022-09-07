import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

function Serched() {
    
    const [searched, setSearched] = useState([]);
    const [offset, setOffset] = useState(0);
    let params = useParams();

    useEffect(() => {
        getSearched(params.search);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);

    const getSearched = (name) => {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&diet=vegetarian&apiKey=25aac33bb9444acca929b779adace82c&number=4&offset=${offset}`)
        .then((response) => {
            console.log(response.data.results);  
            setSearched(response.data.results);
        })
        .catch(error => console.log(error))
    }

    function increaseNumber() {
        setOffset(prevNumber => prevNumber + 5)
    }

    return (
        <div>
            <Navbar />
            <div className='main-container searched-cnt'>
                <div className='searched-title'>
                    <h2>{params.search} recipes</h2>
                    <button className="button" onClick={increaseNumber}>Load More</button>
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