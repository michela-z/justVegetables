import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FavoritesContext from '../../FavoritesContext';
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';
import './Favorites.css';
import { getAllRecipes } from '../../api';


function Favorites() {

    const { favorite, setFavorite } = useContext(FavoritesContext);

    //const [recipes, setRecipes] = useState([]);

    const [ vegetRecipes, setVegetRecipes ] = useState([]);
    const [ vegRecipes, setVegRecipes ] = useState([]);

    const vegetarian = 'vegetarian';
    const vegan = 'vegan';

    useEffect(() => {
        getAllRecipes(vegetarian)
            .then((response) => {   
                setVegetRecipes((response.data.results));
            })
        getAllRecipes(vegan)
        .then((response) => {   
            setVegRecipes((response.data.results));
        })
    },[])

    // useEffect(() => {
    //     const favCard = () => {
    //         favorite.forEach(element => {
    //             getRecipeInfo(element)
    //             .then((response) => {
    //                 //setRecipes((response.data))
    //             })
    //         });
    //     }
    // },[])



    const saveToLocalStorage = (items) => {
        localStorage.setItem('favorites-recipes', JSON.stringify(items))
    }

    const removeFavorite = (id) => {
        // const newFavoriteList = favorite.filter((item) => item.id !== id);
        // setFavorite(newFavoriteList);
        //saveToLocalStorage(newFavoriteList);

        let index = favorite.indexOf(id);
        let newFavoriteList = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
        setFavorite(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
    }

    let findVegetfavorite = vegetRecipes.filter(recipe => favorite.includes(recipe.id));
    let findVegfavorite = vegRecipes.filter(recipe => favorite.includes(recipe.id));

    //let findfavorite = recipes.filter(recipe => favorite.includes(recipe.id));

    return (
        <div>
            <Navbar />

            <div className='main-container'>
                <h2>Favorites</h2>
                <div className='favorites-cnt'>
                <h4 className='sub-title'>Vegetarian</h4>
                    {findVegetfavorite.map((recipe) => (
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
                    ))}
                </div>

                <div className='favorites-cnt'>
                <h4 className='sub-title'>Vegan</h4>
                    {findVegfavorite.map((recipe) => (
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
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Favorites