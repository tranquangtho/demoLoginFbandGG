import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
    user: []
    ,
}

const userSlice = createSlice({
    name: 'user',
    initialState: defaultState,
    reducers: {
        userLogin: (state, action) => {
            console.log("action.payload  userLogin : ", action.payload);
            return {
                ...state,
                user: action.payload,
            }
        },
        userLogout: (state, action) => {
            return {
                ...state,
                user: []
            }
        },

    }
})

export const {
    userLogin, userLogout
} = userSlice.actions

export const userReducer = userSlice.reducer;

