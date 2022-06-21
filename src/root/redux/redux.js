import { combineReducers } from "redux";
import itemReducer from '../reducer/itemReducer';
import  {postReducer}  from '../reducer/PostReducer';

const rootReducer = combineReducers({
    user: itemReducer,
    post: postReducer
});

export default rootReducer;
