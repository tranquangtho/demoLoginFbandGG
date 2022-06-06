import { combineReducers } from "redux";
import itemReducer from './itemReducer';
import bossReducer from './bossReducer';

const rootReducer = combineReducers({
    itemReducer,
    bossReducer
});

export default rootReducer;
