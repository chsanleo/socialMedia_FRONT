import { LOGIN, TOKEN, LOGOUT } from "../types/user.js";
import store from '../store';

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
export const logoutAction = async () => {

    store.dispatch({
        type: LOGOUT
    });
};