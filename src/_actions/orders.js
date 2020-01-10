import axios from 'axios';

export const orderById = (userId) => {
    return {
        type : 'GET_ORDER_BY_ID',
        payload : axios.get(`https://dumb-tickapp.herokuapp.com/api/v1/user/${userId}/orders`)
    }   
}

export const orderPending = (userId) => {
    return {
        type : 'GET_ORDER_PENDING',
        payload : axios.get(`https://dumb-tickapp.herokuapp.com/api/v1/user/${userId}/orders/pending`)
    }   
}

export const orderApproved = (Id) => {
    return {
        type : 'GET_ORDER_APPROVED',
        payload : axios.get(`https://dumb-tickapp.herokuapp.com/api/v1/user/${Id}/orders/approved`)
    }
}