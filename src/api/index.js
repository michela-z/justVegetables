import axios from 'axios';

const apiKey = 'c7d3ae702743492bab88f349d790e9ee'; 

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

export const getAllRecipes = async () => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&diet=vegetarian&apiKey=${apiKey}`)
        return response;
    } catch (error) {
        console.log(error)
    }
}