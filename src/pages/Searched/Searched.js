import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import { getAllRecipes } from "../../api";
import './Searched.css';

function Serched() {
    
    const [searched, setSearched] = useState([]);
    let params = useParams();

    useEffect(() => {
        getAllRecipes(params.search)
            .then((response) => {
                setSearched(response.data.results);
            })
    },[params]);

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
