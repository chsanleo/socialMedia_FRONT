import { ADD_MESSAGELIST } from "../types/messages.js";
import store from '../store.js';

export const addMessageListAction = async (messgList) => {
    try {
        store.dispatch({
            type: ADD_MESSAGELIST,
            payload: messgList
        });
    } catch (error) {
        console.error(error);
    }
};