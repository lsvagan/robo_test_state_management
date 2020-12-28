import searchRobots from './searchRobots';
import robotsReducer from './robotsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({searchRobots,robotsReducer});

export default rootReducer;
