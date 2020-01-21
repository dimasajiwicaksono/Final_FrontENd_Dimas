const initialState = {
    isLoading : false,
    error : null,
    data: []
}


const categories = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES_PENDING' :
            return {
                ...state,
                isLoading :true,
            };
        case 'GET_CATEGORIES_FULFILLED':
            return {
                ...state,
                isLoading:false,
                data : action.payload.data
            }
        case 'GET_CATEGORIES_REJECTED':
            return {
                ...state,
                isLoading:false,
                error:action.payload
            }
        default: 
        return state;
    }
}

export default categories;