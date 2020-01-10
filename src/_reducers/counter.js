const initialState = {
    num: 1,
    total: 300000
}

const total = 300000

const counter = (state = initialState, action) => {
    switch (action.type) {

        case 'INCREAMENT':

            return {
                num: state.num + 1,
                total: (state.num + 1) * total
            }

        case 'DECREAMENT':

            return {
                num: state.num - 1,
                total: (state.num - 1) * total
            }
        default:
            return state;
    }
}

export default counter;