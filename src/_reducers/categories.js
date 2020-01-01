const initialState = {
    fetching : false,
    error : null,
    data: []
}


const categories = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES_PENDING' :
            return {
                ...state,
                fetching :true,
            };
        case 'GET_CATEGORIES_FULFILLED':
            return {
                ...state,
                fetching:false,
                data : action.payload.data
            }
        case 'GET_CATEGORIES_REJECTED':
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        default: 
        return state;
    }
}

export default categories;