import axios from 'axios';

export const categories = (categoryId) => {
    return {
        type : 'GET_CATEGORIES',
        payload : axios.get(`https://dumb-tickapp.herokuapp.com/api/v1/category/${categoryId}/events`)
    }   
}

