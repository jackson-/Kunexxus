import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

// reducser imports here
import users from './users';

const rootReducer = combineReducers({users, routing: routerReducer});

export default rootReducer;