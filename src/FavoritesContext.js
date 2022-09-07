import React, { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

    const [ favorite, setFavorite ] = useState();

    // useEffect(() => {
    //     const recipesFavorites = JSON.parse(localStorage.getItem('favorites-recipes'));
    //     setFavorite(JSON.parse(localStorage.getItem('favorites-recipes')));
    // }, []);

    // function saveToLocalStorage(items) {
    //     localStorage.setItem('favorites-recipes', JSON.stringify(items));
    // }

    const addFavorite = (title, image, id, heartIcon) => {
        if (!heartIcon) {
            const newFavoriteList = [...favorite, { title, image, id }];
            setFavorite(newFavoriteList);
            //saveToLocalStorage(newFavoriteList);
        };
    };

    const removeFavorite = (title, image, id, heartIcon) => {
        if (heartIcon) {
            const newFavoriteList = favorite.filter((fav) => fav.id !== id);
            setFavorite(newFavoriteList);
            //saveToLocalStorage(newFavoriteList);
        };
    };

    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;