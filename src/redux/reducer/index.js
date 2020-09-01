import { combineReducers } from 'redux';

import usersReducer from './user.js';
import eventReducer from './event.js';
import dataReducer from './data.js';
import messageReducer from './messages';

const reducer = combineReducers({
    users: usersReducer, event: eventReducer,
    data: dataReducer, message: messageReducer
});
export default reducer;