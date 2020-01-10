const initialState = {
    fetching: false,
    error: null,
    data: [],
}


const order = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ORDER_BY_ID_PENDING':
            return {
                ...state,
                fetching: true,
            };
        case 'GET_ORDER_BY_ID_FULFILLED':
            return {
                ...state,
                fetching: false,
                data: action.payload.data
            };
        case 'GET_ORDER_BY_ID_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload
            };

        case 'GET_ORDER_PENDING_PENDING':
            return {
                ...state,
                fetching: true,
            };
        case 'GET_ORDER_PENDING_FULFILLED':
            return {
                ...state,
                fetching: false,
                data: action.payload.data
            };
        case 'GET_ORDER_PENDING_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload
            };

        case 'GET_ORDER_APPROVED_PENDING':
            return {
                ...state,
                fetching: true,
            };
        case 'GET_ORDER_APPROVED_FULFILLED':
            return {
                ...state,
                fetching: false,
                data: action.payload.data
            };
        case 'GET_ORDER_APPROVED_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default order;