const initialState = {
    post:[],
    activeId:null
}

export default function PostReducer(state = initialState, action) {

    switch (action.type) {
        case 'POST':
            return {
                ...state,
                post: action.payload
            }
        case 'COMMENT':
            console.log("Comment type :", action);
            return state

        case 'CONTENT':
            console.log("Comment type :", action);
            return state

        case 'LIKE':
            console.log("LIKE type :", action);
            return state

        case 'SHARE':
            console.log("SHARE type :", action);
            return state

        case 'COUNT_LIKE':
            console.log("count Like type :", action);
            return state

        case 'COUNT_COMMENT':
            console.log("Count comment type :", action);
            return state

        case 'COUNT_SHARE':
            console.log("Count share type :", action);
            return state

        case 'DELETE_POST':
            return {
                post:action.payload
            }
            //
        default:
            return state;
    }
}
