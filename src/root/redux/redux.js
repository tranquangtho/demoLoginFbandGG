import { combineReducers } from "redux";
import { userReducer } from '../reducer/itemReducer';
import { postReducer } from '../reducer/PostReducer';

const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer
});

export default rootReducer;
