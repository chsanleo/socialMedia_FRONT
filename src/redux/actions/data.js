import { ADD_COUNTRIES } from "../types/data.js";
import store from '../store.js';

export const addCountries = async (events) => {
    try {
        store.dispatch({
            type: ADD_COUNTRIES,
            payload: events
        });
    } catch (error) {
        console.error(error);
    }
};
export const delCountries = async () => {
    try {
        store.dispatch({
            type: ADD_COUNTRIES,
            payload: []
        });
    } catch (error) {
        console.error(error);
    }
};