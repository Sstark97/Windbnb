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
                guests: state.guests || {}
            };

        case 'SET_FILTERED_LOCATION':
            return {
                ...state,
                filteredLocations: state.places !== undefined && state.location !== undefined && state.guests !== undefined ? state.places.filter(place => state.location.place === `${place.city}, ${place.country}` && Number(state.guests) <= place.maxGuests) : []
            }

        case 'GET_FILTERED_LOCATION':
            return {
                ...state,
                filteredLocations: state.filteredLocations || {}
            };
    
        default:
            return state;
    }

}

export default reducer;