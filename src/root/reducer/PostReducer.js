const initialState = {
    post: [],
    activeId: null
}

export default function PostReducer(state = initialState, action) {

    switch (action.type) {
        case 'POST':
            const newList = [...state.post]
            newList.push(action)
            return {
                ...state,
                post: newList
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
            console.log("delete type :", action);
            const removePostId= action.payload
            state=state.filter(post=>post.id !== removePostId)
            return state

        default:
            return state;
    }
}
