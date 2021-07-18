const reducer = (state, action) => {

    switch (action.type) {

        case 'GET_PLACES':
            return {
                ...state,
                places: state.places
            };
        
        case 'SET_LOCATION':
            return {
                ...state,
                location: action.payload || {}
            }

        default:
            return state;
    }

}

export default reducer;