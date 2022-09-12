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
        } else {
            localStorage.setItem('favorites-recipes', JSON.stringify(favorite));
        }
    }, []);

    const addFavorite = (id, heartIcon) => {
        if (!heartIcon) {
            const newFavoriteList = favorite.concat(id);
            setFavorite(newFavoriteList);
            saveToLocalStorage(newFavoriteList);
        };
    };

    const removeFavorite = (id, heartIcon) => {
        if (heartIcon) {
            const newFavoriteList = favorite.filter((fav) => fav.id !== id);
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