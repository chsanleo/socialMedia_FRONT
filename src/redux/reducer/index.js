import { combineReducers } from 'redux';

import usersReducer from './user.js';
import eventReducer from './event.js';

const reducer = combineReducers({
    users: usersReducer,
    event:eventReducer
});
export default reducer;