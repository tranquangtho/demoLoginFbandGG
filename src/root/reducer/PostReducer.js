
const initialState = {
    post: [],
}

export default function PostReducer(state = initialState, action) {

    switch (action.type) {
        case 'POST_FACEBOOK':
            console.log("post action :", action.payload);
            return {
                ...state,
                post: action.payload
            }
        case 'COMMENT_FACEBOOK':
            console.log("Comment type123 :", action.payload);
            return {
                ...state,
                post: action.payload
            }
        case 'DELETE_COMMENT_FACEBOOK':
            console.log(" delete Comment type :", action);
            return {
                post: action.payload
            }
        case 'LIKE_FACEBOOK':
            console.log("LIKE type :", action.payload);
            return {
                ...state,
                post: action.payload
            }
        case 'DELETE_POST_FACEBOOK':
            return {
                post: action.payload
            }
        default:
            return state;
    }
}
