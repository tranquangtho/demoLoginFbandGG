import { createSlice, current } from '@reduxjs/toolkit'

const defaultState = {
    posts: {},
}

const postSlice = createSlice({
    name: 'post',
    initialState: defaultState,
    reducers: {
        changePost: (state, action) => {
           console.log(current(state));

            return{
                ...state,
                posts:action.payload
            }
        },
        updatePost:(state, action)=>{
            state.push(action.payload)     
           console.log(current(state));

        }
    }
})

export const {
    changePost,
} = postSlice.actions

export const postReducer = postSlice.reducer;
