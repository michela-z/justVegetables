import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../FavoritesContext';
import fullHeart from '../../public/cuore-pieno.png';
import emptyHeart from '../../public/cuore-vuoto.png';

function Card({ title, image, id }) {

    const { addFavorite }  = useContext(FavoritesContext);
    const { removeFavorite }  = useContext(FavoritesContext);
    const { favorite } = useContext(FavoritesContext);

    // useEffect(() => {
    //     const check = favorite.some((item) => item.id === id);
    //     if (check) {
    //     setHeartIcon(true)
    //     }
    // }, [favorite])
    
    const [ heartIcon, setHeartIcon ] = useState();

    const isInFavorites = () => {
            return (
                <img src={fullHeart} alt="like" className='favorite blue' onClick={() => {removeFavorite(title, image, id, heartIcon); toggle()}}/>
            )
    }

    const toggle = () => {
        isInFavorites();
        setHeartIcon(!heartIcon);
    }

    return (
        <div className='card'>
            {!heartIcon ? <img src={emptyHeart} alt="like" className='favorite' onClick={() => {addFavorite(title, image, id, heartIcon); toggle()}}/> : isInFavorites()}
            <Link to={'/recipe/' + id}>
                <img src={image} alt='' className='card-image'/>
                <div className='card-info-cnt'>
                    <p className='card-title'>{title}</p> 
                </div>
            </Link>
        </div>
    )
}

export default Card;