import { combineReducers } from "redux";
import { userReducer } from './reducer/userReducer';
import { postReducer } from './reducer/PostReducer';
import { FriendReducer } from "./reducer/FriendReducer";
import { currentReducer } from "./reducer/CurrentLogin";
const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    friend:FriendReducer,
    current:currentReducer
});
export default rootReducer;
