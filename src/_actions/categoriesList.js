import axios from 'axios';

export const categoriesList = () => {
    return {
        type : 'GET_CATEGORIES_LIST',
        payload : axios.get(`https://dumb-tickapp.herokuapp.com/api/v1/categories`)
    }   
}
