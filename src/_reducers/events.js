const initialState = {
    fetching: false,
    error: null,
    data: [],
}


const events = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_EVENTS_PENDING':
            return {
                ...state,
                fetching: true,
            };
        case 'GET_EVENTS_FULFILLED':
            return {
                ...state,
                fetching: false,
                data: action.payload.data
            };
        case 'GET_EVENTS_BY_ID_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        case 'GET_EVENTS_BY_ID_PENDING':
            return {
                ...state,
                fetching: true,
            };
        case 'GET_EVENTS_BY_ID_FULFILLED':
            return {
                ...state,
                fetching: false,
                data: action.payload.data
            };
        case 'GET_EVENTS_BY_ID_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default events;