import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
    current: [],
}

const currentSlice = createSlice({
    name: 'current',
    initialState: defaultState,
    reducers: {
        currentLogin: (state, action) => {
            console.log("action.payload  123 : ", action.payload);
            return {
                ...state,
                current: action.payload,
            }
        },
        currentLogOut: (state, action) => {
            return {
                ...state,
                current:action.payload
            }
        },

    }
})

export const {
    currentLogin, currentLogout
} = currentSlice.actions

export const currentReducer = currentSlice.reducer;

