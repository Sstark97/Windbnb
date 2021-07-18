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
        case 'GET_LOCATION':
            return {
                ...state,
                location: state.location || {}
            };
        case 'SET_GUESTS':
            return {
                ...state,
                guests: action.payload || {}
            }
        case 'GET_GUESTS':
            return {
                ...state,
                guests: state.location || {}
            };
    
        default:
            return state;
    }

}

export default reducer;