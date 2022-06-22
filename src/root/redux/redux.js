import { combineReducers } from "redux";
import { UserReducer } from '../reducer/UserReducer';
import { postReducer } from '../reducer/PostReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    post: postReducer
});

export default rootReducer;
