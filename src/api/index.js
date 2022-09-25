import axios from 'axios';

const apiKey = '8612837edd0c4698bf751b0c706cfa8d'; 

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
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apiKey}`)
        return response;
    } catch (error) {
        console.log(error)
    }
}