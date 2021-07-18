export const getPlaces = (payload) => ({
    type: 'GET_PLACES',
    payload,
});

export const setLocation = (payload) => ({
    type: 'SET_LOCATION',
    payload,
});

export const getLocation = (payload) => ({
    type: 'GET_LOCATION',
    payload,
});

export const setGuests = (payload) => ({
    type: 'SET_GUESTS',
    payload,
});

export const getGuests = (payload) => ({
    type: 'GET_GUESTS',
    payload,
});

export const setFilteredLocations = (payload) => ({
    type: 'SET_FILTERED_LOCATION',
    payload,
});

export const getFilteredLocations = (payload) => ({
    type: 'GET_FILTERED_LOCATION',
    payload,
});
