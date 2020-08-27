import { ADD_EVENTS } from '../types/event.js';

const initialState = {
    eventList: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_EVENTS:
            return {
                ...state,
                eventList: action.payload
            };
        default:
            return state;
    }
};