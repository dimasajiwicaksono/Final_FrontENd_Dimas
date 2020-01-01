const initialState = {
    fetching : false,
    error : null,
    data: []
}


const profile = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_PROFILE_PENDING' :
            return {
                ...state,
                fetching :true,
            };
        case 'GET_PROFILE_FULFILLED':
            return {
                ...state,
                fetching:false,
                data : action.payload.data
            }
        case 'GET_PROFILE_REJECTED':
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        default: 
        return state;
    }
}

export default profile;