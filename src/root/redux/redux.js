import { combineReducers } from "redux";
import  UserReducer  from '../reducer/UserReducer';
import  PostReducer  from '../reducer/PostReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    post: PostReducer
});

export default rootReducer;
