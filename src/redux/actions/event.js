import { ADD_EVENTS, ADD_ONE_EVENT } from "../types/event.js";
import store from '../store.js';

export const addEventListAction = async (eventList) => {
    try {
        store.dispatch({
            type: ADD_EVENTS,
            payload: eventList
        });
    } catch (error) {
        console.error(error);
    }
};
export const delEventListAction = async () => {
    try {
        store.dispatch({
            type: ADD_EVENTS,
            payload: []
        });
    } catch (error) {
        console.error(error);
    }
};
export const addEventAction = async (event) => {
    try {
        store.dispatch({
            type: ADD_ONE_EVENT,
            payload: event
        });
    } catch (error) {
        console.error(error);
    }
};