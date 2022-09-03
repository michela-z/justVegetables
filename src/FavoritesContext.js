import React, { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

    const [ items, setItems ] = useState([]);

    useEffect(() => {
        const recipesFavorites = JSON.parse(localStorage.getItem('favorites-recipes'));
        setItems(recipesFavorites);
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('favorites-recipes', JSON.stringify(items))
    }

    const addToFavorites = (title, image, id, favorite) => {
        if (!favorite) {
            const newFavoriteList = [...items, { title, image, id }]
            setItems(newFavoriteList);
            saveToLocalStorage(newFavoriteList);
        };
    };

    const removeFromFavorites = (title, image, id, favorite) => {
        if (favorite) {
            const newFavoriteList = items.filter((fav) => fav.id !== id);
            setItems(newFavoriteList);
            saveToLocalStorage(newFavoriteList);
        };
    };

    return (
        <FavoritesContext.Provider value={{ items, setItems, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;