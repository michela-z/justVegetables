import axios from 'axios';

const apiKey = '90caa596729a4e4d972dec06489272f2'; 

export const getRecipes = async (param, offset) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${param}&offset=${offset}&diet=vegetarian&number=5&apiKey=${apiKey}`);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const getRecipeInfo = async (param) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${param}/information?apiKey=${apiKey}`)
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const getAllRecipes = async (param) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${param}&diet=vegetarian&apiKey=${apiKey}`)
        return response;
    } catch (error) {
        console.log(error)
    }
}