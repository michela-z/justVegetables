import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import FavoritesContext from '../FavoritesContext';
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';

function Favorites({ title, image, id }) {

    const { items, setItems } = useContext(FavoritesContext);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('favorites-recipes', JSON.stringify(items))
    }

    const removeFavorite = (id) => {
        const newFavoriteList = items?.filter((item) => item.id !== id);
        setItems(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
    }

    return (
        <div>
            <Navbar />
            <div className='main-container'>
                <h2>Favorites</h2>
                <div className='favorites-cnt'>
                    {items?.map((item) => (
                    <div key={item.id}>
                        <div className='favorite-page'>
                            <div className='favorite-info'>
                                <Link to={'/recipe/' + item.id} style={{ textDecoration: 'none' }}>
                                    <h3>{item.title}</h3>
                                </Link>
                            </div>
                            <img src={item.image} className='favorite-image' alt=''></img>
                            <div className='favorite-trash' onClick={() => removeFavorite(item.id)}><BsFillTrashFill size={"70px"}/></div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Favorites