import { combineReducers } from 'redux';

import usersReducer from './user.js';
import eventReducer from './event.js';
import datareducer from './data.js';

const reducer = combineReducers({
    users: usersReducer,
    event: eventReducer,
    data: datareducer
});
export default reducer;