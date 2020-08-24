import { LOGIN, TOKEN, LOGOUT } from "../types/user.js";

const initialState = {
    user: {},
    token: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload
            };
        case TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                token: '',
                user: {}
            };
        default:
            return state;
    }
}