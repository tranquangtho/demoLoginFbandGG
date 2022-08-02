import { createSlice, current } from '@reduxjs/toolkit'

const defaultState = {
    posts: [],
}

const postSlice = createSlice({
    name: 'post',
    initialState: defaultState,
    reducers: {
        changePost: (state, action) => {
            // console.log("Action.payload : ",action.payload);
            return{
                ...state,
                posts:action.payload
            }
        },
        updatePost:(state, action)=>{
            return{
                ...state,
                posts:action.payload
            }
        },
        updateComment:(state,action)=>{
            // console.log("Action.payload comment : ",action.payload);
            return {
                ...state,
                posts:action.payload
            }
        },
        deleteComment:(state,action)=>{
            console.log("action.payload Delete Comment :" ,action.payload);
            return {
                ...state,
                posts:action.payload
            }
        }
        

    }
})

export const {
    changePost,
    updatePost,
    updateComment,
    deleteComment
} = postSlice.actions

export const postReducer = postSlice.reducer;
