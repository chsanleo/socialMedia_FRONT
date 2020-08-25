import { combineReducers } from 'redux';

import usersReducer from './user.js';

const reducer = combineReducers({
    users: usersReducer
});
export default reducer;