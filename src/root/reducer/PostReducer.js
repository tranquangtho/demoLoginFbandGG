import { createSlice } from '@reduxjs/toolkit'
import produce from 'immer';
const defaultState = {
    posts: [],
}

const postSlice = createSlice({
    name: 'post',
    initialState: defaultState,
    reducers: {
        changePost: (state, action) => {
            console.log("action.payload : " ,action.payload);
            return {
                ...state,
                posts: action.payload,
            }
        },
        // changePost: (state, action) => {
        //     console.log("action.payload : " ,action.payload);
        //     return {
        //         ...state,
        //         posts: action.payload,
        //     },
    }
})

export const {
    changePost,
} = postSlice.actions

export const postReducer = postSlice.reducer;

// const initialState = {
//     post: [],
//     activeId: null
// }

// export default function PostReducer(state = initialState, action) {

//     switch (action.type) {
//         case 'POST':
//             console.log("post action :", action.payload);
//             return {
//                 ...state,
//                 post: action.payload
//             }
//         case 'COMMENT':
//             console.log("Comment type123 :", action.payload);
//             return {
//                 ...state,
//                 post: action.payload
//             }
//         case 'DELETE_COMMENT':
//             console.log(" delete Comment type :", action);
//             return {
//                 post: action.payload
//             }

//         case 'CONTENT':
//             console.log("Comment type :", action);
//             return state

//         case 'LIKE':
//             console.log("LIKE type :", action.payload);
//             return {
//                 ...state,
//                 post: action.payload
//             }

//         case 'SHARE':
//             console.log("SHARE type :", action);
//             return state

//         case 'COUNT_LIKE':
//             // console.log("count Like type :", action);
//             return state

//         case 'COUNT_COMMENT':
//             console.log("Count comment type :", action);
//             return state

//         case 'COUNT_SHARE':
//             console.log("Count share type :", action);
//             return state

//         case 'DELETE_POST':
//             return {
//                 post: action.payload
//             }

//         case 'ADD_COMMENT_TO_POST': {
//             return {
//                 ...state,
//                 post: action.payload
//             }
//         }
//         //
//         // case "UPDATE_POST":{
//         //     return {
//         //         ...state,
//         //         post:action.payload
//         //     }
//         // }
//         default:
//             return state;
//     }
// }
