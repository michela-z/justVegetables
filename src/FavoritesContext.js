import React, { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

    const [ favorite, setFavorite ] = useState([]);

    function saveToLocalStorage(items) {
        localStorage.setItem('favorites-recipes', JSON.stringify(items));
    }

    useEffect(() => {
        const recipesFavorites = JSON.parse(localStorage.getItem('favorites-recipes'));
        if (recipesFavorites) {
            setFavorite(recipesFavorites);
        }
    }, []);

    const addFavorite = (id, heartIcon) => {
        if (!heartIcon) {
            const newFavoriteList = favorite.concat(id);
            console.log(newFavoriteList);
            setFavorite(newFavoriteList);
            saveToLocalStorage(newFavoriteList);
        };
    };

    const removeFavorite = (id, heartIcon) => {
        if (heartIcon) {
            // let index = favorite.indexOf(id);
            // const newFavoriteList = [...favorite.slice(0, index), ...favorite.slice(index + 1)]
            const newFavoriteList = favorite.filter((item) => item.id !== id);
            setFavorite(newFavoriteList);
            saveToLocalStorage(newFavoriteList);
        };
    };

    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;