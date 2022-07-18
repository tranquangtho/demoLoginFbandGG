import { combineReducers } from "redux";
import { userReducer } from './reducer/userReducer';
import { postReducer } from './reducer/PostReducer';
import { FriendReducer } from "./reducer/FriendReducer";
const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    friend:FriendReducer
});
export default rootReducer;
