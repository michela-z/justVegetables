import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../FavoritesContext';
import fullHeart from '../../public/cuore-pieno.png';
import emptyHeart from '../../public/cuore-vuoto.png';

function Card({ title, image, id }) {

    const { addToFavorites }  = useContext(FavoritesContext);
    const { removeFromFavorites }  = useContext(FavoritesContext);
    const { items } = useContext(FavoritesContext);

    const checkIsAdd = (id) => {
        if(items.some((val) => val.id === id)) {
            return true;
        }
    };
    
    const [favorite, setFavorite] = useState(checkIsAdd);

    const isInFavorites = (id) => {
            return (
                <img src={fullHeart} alt="like" className='favorite blue' onClick={() => {removeFromFavorites(title, image, id, favorite); toggle()}}/>
            )
    }

    const toggle = () => {
        isInFavorites(id);
        setFavorite(!favorite);
        console.log('toggle');
    }

    return (
        <div className='card'>
            {!favorite ? <img src={emptyHeart} alt="like" className='favorite' onClick={() => {addToFavorites(title, image, id, favorite); toggle()}}/> : isInFavorites(id)}
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