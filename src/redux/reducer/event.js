import { ADD_EVENTS, ADD_ONE_EVENT } from '../types/event.js';

const initialState = {
    eventList: [],
    event: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_EVENTS:
            return {
                ...state,
                eventList: action.payload
            };
        case ADD_ONE_EVENT:
            return {
                ...state,
                event: action.payload
            };
        default:
            return state;
    }
};