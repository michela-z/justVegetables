import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../FavoritesContext';

function Card({ title, image, id }) {

    const { addToFavorites }  = useContext(FavoritesContext);
    const { removeFromFavorites }  = useContext(FavoritesContext);
    const { items } = useContext(FavoritesContext);

    const checkIsAdd = () => {
        if(items) {
            if(items.some((val) => val.id === id)) {
                return true;
            }
        }
    };
    
    const [favorite, setFavorite] = useState(checkIsAdd);

    const isInFavorites = (id) => {
            return (
                <img src='../../cuore-pieno.png' alt="like" className='favorite blue' onClick={() => {removeFromFavorites(title, image, id, favorite); toggle()}}/>
            )
    }

    const toggle = () => {
        isInFavorites(id);
        setFavorite(!favorite);
    }

    return (
        <div className='card'>
            {!favorite ? <img src='../../cuore-vuoto.png' alt="like" className='favorite' onClick={() => {addToFavorites(title, image, id, favorite); toggle()}}/> : isInFavorites(id)}
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