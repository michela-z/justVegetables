import axios from 'axios';

// export const options = {
//     method: 'GET',
//     url: 'https://api.spoonacular.com/recipes/complexSearch',
//     params: {offset: '0', number: '1', apiKey: 'c7d3ae702743492bab88f349d790e9ee'}
// };

// // // axios.request(options).then(function (response) {
// // // 	console.log(response.data);
// // // }).catch(function (error) {
// // // 	console.error(error);
// // // });

// export const getRecipes = async (params) => {
//     try {
//         const response = await axios.request(params);
//         return response;
//     } catch (error) {
//         console.log(error)
//     }
// }

export const getRecipes = async (param, offset) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${param}&offset=${offset}&diet=vegetarian&apiKey=4396840b109d4699afe6f0788f2ed9ff&number=1`);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const getRecipeInfo = async (param) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${param}/information?apiKey=4396840b109d4699afe6f0788f2ed9ff`)
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const getAllRecipes = async (param) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${param}&apiKey=4396840b109d4699afe6f0788f2ed9ff`)
        return response;
    } catch (error) {
        console.log(error)
    }
}

// https://api.spoonacular.com/recipes/findByIngredients