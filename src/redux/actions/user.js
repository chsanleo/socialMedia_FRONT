import { LOGIN, TOKEN, LOGOUT, UPDATE_USER, EXT_USER } from "../types/user.js";
import store from '../store.js';

export const loginAction = async (loggedUser) => {
    try {
        store.dispatch({
            type: LOGIN,
            payload: loggedUser.user
        });
        store.dispatch({
            type: TOKEN,
            payload: loggedUser.token
        });

    } catch (error) {
        console.error(error);
    }
};
export const updateUserAction = async (user) =>{
    try {
        store.dispatch({
            type: UPDATE_USER,
            payload: user
        });
    } catch (error) {
        console.error(error);
    }
};
export const extUserAction = async (user) =>{
    try {
        store.dispatch({
            type: EXT_USER,
            payload: user
        });
    } catch (error) {
        console.error(error);
    }
};
export const logoutAction = async () => {

    store.dispatch({
        type: LOGOUT
    });
};