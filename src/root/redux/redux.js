import { combineReducers } from "redux";
import { userReducer } from '../reducer/itemReducer';
import { postReducer } from '../reducer/PostReducer';
import { registerReducer } from '../reducer/RegisterReducer';

const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    register:registerReducer
});

export default rootReducer;
