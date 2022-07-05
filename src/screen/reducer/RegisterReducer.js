import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
    register: [],
    activeId: null
}

const registerSlice = createSlice({
    name: 'register',
    initialState: defaultState,
    reducers: {
        registerUser: (state, action) => {
            console.log("action.payload :",action.payload);
            return {
                ...state,
                user: action.payload
            }
        },
    }
})

export const {
    registerUser
} = registerSlice.actions

export const registerReducer = registerSlice.reducer;

