import axios from 'axios';
import {LOGIN_PENDING } from '../config/const';


export const isLoginPending = (isLoginPending) => {
    return {
        type : LOGIN_PENDING,
        payload : axios.get('https://dumb-tick.herokuapp.com/api/v1/events')
    }   
}
