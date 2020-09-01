import { ADD_COUNTRIES } from '../types/data.js';

const initialState = {
    countriesList: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COUNTRIES:
            return {
                ...state,
                countriesList: action.payload
            };
        default:
            return state;
    }
};