import axios from 'axios';

export const events = () => {
    return {
        type : 'GET_EVENTS',
        payload : axios.get('https://dumb-tickapp.herokuapp.com/api/v1/events')
    }   
}

export const eventsById = (eventId) => {
    return {
        type : 'GET_EVENTS_BY_ID',
        payload : axios.get(`https://dumb-tickapp.herokuapp.com/api/v1/event/${eventId}`)
    }   
}