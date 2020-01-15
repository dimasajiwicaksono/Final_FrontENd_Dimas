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

export const getEventsToday = (date) => {

    return {
        type: 'GET_EVENTS_TODAY',
        payload: axios.get(`https://dumb-tickapp.herokuapp.com/api/v1/events/${date}`)
    }
}

export const getEventsTomorrow = (date2) => {

    return {
        type: 'GET_EVENTS_TOMORROW',
        payload: axios.get(`https://dumb-tickapp.herokuapp.com/api/v1/events/${date2}`)
    }
}