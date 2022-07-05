import { combineReducers } from "redux";
import { userReducer } from '../reducer/itemReducer';
import { postReducer } from '../reducer/PostReducer';
import { registerReducer } from '../reducer/RegisterReducer';
import { FriendReducer } from "../reducer/FriendReducer";
const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    register:registerReducer,
    friend:FriendReducer
});

export default rootReducer;
