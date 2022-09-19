import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FavoritesContext from '../../FavoritesContext';
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';
import './Favorites.css';
//import { getAllRecipes } from '../../api';
import axios from 'axios';

function Favorites() {

    const { favorite, setFavorite } = useContext(FavoritesContext);
    //const [recipes, setRecipes] = useContext([]);

    // const [ vegetRecipes, setVegetRecipes ] = useState([]);
    // const [ vegRecipes, setVegRecipes ] = useState([]);

    // const vegetarian = 'vegetarian';
    // const vegan = 'vegan';

    // useEffect(() => {
    //     getAllRecipes(vegetarian)
    //         .then((response) => {   
    //             setVegetRecipes((response.data.results));
    //         })
    //     getAllRecipes(vegan)
    //     .then((response) => {   
    //         setVegRecipes((response.data.results));
    //     })
    // },[])

    const request = () => {
        for (let i = 0; i < favorite.length; i++) {
            const element = favorite[i];
            let url = `https://api.spoonacular.com/recipes/${element}/information?apiKey=d2c828e2a18c4b53871971851c1f1a77`;
            axios.get(url)
            .then((response) => {
                let title = response.data.title;
                let image = response.data.image;
                let id = response.data.id;
                // // let result = recipes.filter(o1 => favorite.some(o2 => o1.id === o2));
                // let result = recipes.find(x => x.id === 658276)
                //console.log(recipes.title)  
                console.log(title, image, id)
            })
            .catch ((error) => console.log(error))
        }
    }

    // useEffect(() => {
    //     request()
    // },[favorite])

    // const favCard =
    // favorite.map(element => {
    //     getRecipeInfo(element)
    //     .then((response) => {
    //         setRecipes(prev => [...prev, response.data.title])
    //         console.log(recipes)
    //     })
    //     return (<p>{recipes.map(recipe => (recipe))}</p>)
    // });

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

    // let findVegetfavorite = vegetRecipes.filter(recipe => favorite.includes(recipe.id));
    // let findVegfavorite = vegRecipes.filter(recipe => favorite.includes(recipe.id));

    //let findfavorite = recipes.filter(recipe => favorite.includes(recipe.id));

    return (
        <div>
            <Navbar />

            <div className='main-container'>
                <h2>Favorites</h2>

                <div className='favorites-cnt'>
                    <h4 className='sub-title'>Vegetarian</h4>
                </div>

                {/* 
                <div className='favorites-cnt'>
                    <h4 className='sub-title'>Vegetarian</h4>
                    {favorite.map((recipe) => (
                    <div key={recipe.id}>
                        <div className='favorite-page'>
                            <div className='favorite-info'>
                                <Link to={'/recipe/' + recipe.id} style={{ textDecoration: 'none' }}>
                                    <h3>{recipe.title}{recipe.id}</h3>
                                </Link>
                            </div>
                            <img src={recipe.image} className='favorite-image' alt=''></img>
                            <div className='favorite-trash' onClick={() => removeFavorite(recipe.id)}><BsFillTrashFill size={"70px"}/></div>
                        </div>
                    </div>
                    ))}
                </div> */}

                {/* <div className='favorites-cnt'>
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
                </div> */}

            </div>

        </div>
    )
}

export default Favorites