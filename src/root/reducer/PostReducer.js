import { createSlice, current } from '@reduxjs/toolkit'

const defaultState = {
    posts: [],
}

const postSlice = createSlice({
    name: 'post',
    initialState: defaultState,
    reducers: {
        changePost: (state, action) => {
            console.log("Action.payload : ",action.payload);
            return{
                ...state,
                posts:action.payload
            }
        },
        updatePost:(state, action)=>{
            return{
                ...state,
                posts:[
                    ...state,
                    {
                    isLike:action.payload
                }]
            }
        },
        updateComment:(state,action)=>{
            console.log("Action.payload comment : ",action.payload);
            
            return {
                ...state,
                posts:[...state,{
                    comment:action.payload
                }]
            }
        }

    }
})

export const {
    changePost,
    updatePost,
    updateComment
} = postSlice.actions

export const postReducer = postSlice.reducer;
