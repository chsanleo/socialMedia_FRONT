import { ADD_EVENTS } from "../types/event.js";
import store from '../store.js';

export const addEventsAction = async (events) => {
    try {
        store.dispatch({
            type: ADD_EVENTS,
            payload: events
        });
    } catch (error) {
        console.error(error);
    }
};
export const delEventsAction = async () => {
    try {
        store.dispatch({
            type: ADD_EVENTS,
            payload: []
        });
    } catch (error) {
        console.error(error);
    }
};