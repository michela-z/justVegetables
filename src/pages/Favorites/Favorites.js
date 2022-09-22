import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FavoritesContext from '../../FavoritesContext';
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';
import './Favorites.css';
import { getRecipeInfo, getAllRecipes } from '../../api';

function Favorites() {

    //let recipe = [];

    const { favorite, setFavorite } = useContext(FavoritesContext);
    const [recipes, setRecipes] = useState([]);

    // const getRecipe = () => {
    //     for (let i = 0; i < favorite.length; i++) {
    //         const element = favorite[i];
    //         getRecipeInfo(element)
    //         .then((response) => {
    //             let title = response.data.title;
    //             let image = response.data.image;
    //             let id = response.data.id;
    //             // let result = recipes.filter(o1 => favorite.some(o2 => o1.id === o2));
    //             // let result = recipes.find(x => x.id === 658276)
    //             // console.log(title)
    //             // recipe.push({id: id, title: title, image: image})
    //             // if(recipes.includes(element))
    //             // setRecipes(prev => [...prev, {id: id, title: title, image: image}])

    //             let check = recipe.filter(item => item !== id);
    //             if(check) {
    //                 recipe.push({id: id, title: title, image: image});
    //             }
    //         })
    //         .catch((error) => console.log(error))
    //     }
    // }

    // useEffect(() => {
    //     getRecipe()
    //     console.log('dentro use effect', recipe)
    // },[])

    useEffect(() => {
        getAllRecipes()
        .then((response) => {
            setRecipes((response.data.results))
        })
    },[])

    const saveToLocalStorage = (items) => {
        localStorage.setItem('favorites-recipes', JSON.stringify(items))
    }

    const removeFavorite = (id) => {
        // const newFavoriteList = favorite.filter((item) => item.id !== id);
        // setFavorite(newFavoriteList);
        // saveToLocalStorage(newFavoriteList);

        let index = favorite.indexOf(id);
        let newFavoriteList = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
        setFavorite(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
    }

    let findfavorite = recipes.filter(recipe => favorite.includes(recipe.id));

    return (
        <div>
            <Navbar />
            <div className='main-container'>
            <h2>Favorites</h2>

            <div className='favorites-cnt'>
                {findfavorite.map((recipe) => {
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