import { combineReducers } from "redux";
import itemReducer from '../reducer/itemReducer';
import PostReducer from '../reducer/PostReducer';

const rootReducer = combineReducers({
    user:itemReducer,
    add:PostReducer
});

export default rootReducer;
