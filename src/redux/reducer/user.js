import { LOGIN, TOKEN, LOGOUT, UPDATE_USER, EXT_USER } from '../types/user.js';

const initialState = {
    user: {},
    userExt: {},
    token: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
        case UPDATE_USER:
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
        case EXT_USER:
            return {
                ...state,
                userExt: action.payload
            };
        default:
            return state;
    }
};