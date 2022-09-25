import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FavoritesContext from '../../FavoritesContext';
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';
import './Favorites.css';
import { getAllRecipes, getRecipeInfo } from '../../api';

function Favorites() {

    let newrecipe = [];

    const { favorite, setFavorite } = useContext(FavoritesContext);
    const [recipes, setRecipes] = useState([]);

    const getRecipe = () => {
        if(favorite.length !== recipes.length) {
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
    }

    function getUnique() {
        newrecipe = recipes
            .map(e => e['id'])
            .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => recipes[e]).map(e => recipes[e])
        return newrecipe;
    }

    console.log(getUnique())

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
        window.location.reload(false);
    }

    return (
        <div>
            <Navbar />
            <div className='main-container'>
            <h2>Favorites</h2>

            <div className='favorites-cnt'>
                {newrecipe.map((recipe) => {
                    return (
                        <div key={recipe.id}>
                            <div className='favorite-page'>
                                <div className='favorite-info'>
                                    <Link to={'/recipe/' + recipe.id} style={{ textDecoration: 'none' }}>
                                        <h3>{recipe.title}</h3>
                                    </Link>
                                </div>
                                <img src={recipe.image} className='favorite-image' alt=''></img>
                                <div className='favorite-trash' onClick={() => removeFavorite(recipe.id)}><BsFillTrashFill size={"70px"}/></div>
                            </div>
                        </div>
                    )
                })}
            </div>

            </div>
        </div>
    )
}

export default Favorites