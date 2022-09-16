import React, { createContext, useState, useEffect } from "react";
import { getAllRecipes } from "./api";
//import data from './data';

const GetRecipeContext = createContext();


export function GetRecipeProvider({ children }) {

    const [ recipes, setRecipes ] = useState([]);

    //options.params = {...options.params, diet: 'vegetarian'};

    // //const baseURL = `https://api.spoonacular.com/recipes/complexSearch?query=vegetarian&apiKey=9547a05f38b94e7098b26ab63cd24f9d&number=1&offset=${offset}`;

    // //useEffect(() => {
    //     const getRecipes = async (params) => {
    //         try {
    //             const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${params}&apiKey=d2c828e2a18c4b53871971851c1f1a77&number=1`)
    //             // .then((res) => {
    //             //     setRecipes(res.data.results);
    //             // })
    //             return response;
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    // //}, []);

    // useEffect(() => {
    //     getRecipes(options)
    //         .then((response) => {
    //             setRecipes(response.data.results);
    //         })
    // },[recipes])
    
    // //const URL = `https://api.spoonacular.com/recipes/complexSearch?query=vegetarian&apiKey=d2c828e2a18c4b53871971851c1f1a77&number=1`;

    // useEffect(() => {
    //     getAllRecipes()
    //         .then((response) => {
    //             setRecipes(response.data.results);
    //         })
    // },[])

    return (
        <GetRecipeContext.Provider value={{ recipes }}>
            {children}
        </GetRecipeContext.Provider>
    )
}

export default GetRecipeContext;