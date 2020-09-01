import { ADD_MESSAGELIST} from '../types/messages.js';

const initialState = {
    messageList: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGELIST:
            return {
                ...state,
                messageList: action.payload
            };
        default:
            return state;
    }
};