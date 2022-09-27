import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FavoritesContext from '../../FavoritesContext';
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';
import './Favorites.css';
import { getRecipeInfo } from '../../api';

function Favorites() {

    const { favorite, setFavorite } = useContext(FavoritesContext);
    const [recipes, setRecipes] = useState([]);
    const [newrecipes, setNewrecipes] = useState([]);

    const getRecipe = () => {
        setRecipes([]);
        for (let i = 0; i < favorite.length; i++) {
            const element = favorite[i];
            getRecipeInfo(element)
            .then((response) => {
                let title = response.data.title;
                let image = response.data.image;
                let id = response.data.id;
                setRecipes(prev => [...prev, {id: id, title: title, image: image}])
            })
            .catch((error) => console.log(error))
        }
    }

    useEffect(() => {
        let uniqueID = [];
        const getUnique = () => {
            uniqueID = recipes
                .map(e => e['id'])
                .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => recipes[e]).map(e => recipes[e])
            return uniqueID;
        }
        console.log(getUnique())
        setNewrecipes(uniqueID);
    },[favorite, recipes])

    useEffect(() => {
        getRecipe()
    },[favorite])

    const saveToLocalStorage = (items) => {
        localStorage.setItem('favorites-recipes', JSON.stringify(items))
    }

    const removeFavorite = (id) => {
        let index = favorite.indexOf(id);
        let newFavoriteList = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
        setFavorite(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
    }

    return (
        <div>
            <Navbar />
            <div className='main-container'>
            <h2>Favorites</h2>
            <div className='favorites-cnt'>
                {favorite.length !== 0 ? newrecipes.map((recipe) => {
                return (
                    <div key={recipe.id}>
                        <div className='favorite-page'>
                            <div className='favorite-info'>
                                <Link to={'/recipe/' + recipe.id} style={{ textDecoration: 'none' }}>
                                    <h3>{recipe.title}</h3>
                                </Link>
                            </div>
                            <img src={recipe.image} className='favorite-image' alt=''></img>
                            <div className='favorite-trash' onClick={() => removeFavorite(recipe.id)}><BsFillTrashFill size={"70px"}/>
                            </div>
                        </div>
                    </div>
                )
                }) : <p className='empty'>No favorites</p>}
            </div>
            </div>
        </div>
    )
}

export default Favorites