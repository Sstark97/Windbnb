const reducer = (state, action) => {

    switch (action.type) {

        case 'GET_PLACES':
            return {
                ...state,
                places: state.places
            };

        default:
            return state;
    }

}

export default reducer;