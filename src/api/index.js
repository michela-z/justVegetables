import axios from 'axios';

const apiKey = 'bae280b35a1446a3bff14d2c197a7db4'; 

export const getRecipes = async (param, offset) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${param}&offset=${offset}&diet=vegetarian&number=1&apiKey=${apiKey}`);
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