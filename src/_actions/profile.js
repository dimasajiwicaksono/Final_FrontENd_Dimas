import axios from 'axios';



export const profile = (userId) => {
    return {
        type : 'GET_PROFILE',
        payload : axios.get (`https://dumb-tick.herokuapp.com/api/v1/user/${userId}`)
    }
}