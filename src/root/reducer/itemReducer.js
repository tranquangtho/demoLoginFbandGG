import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
    user: {},
    activeId: null
}

const userSlice = createSlice({
    name: 'post',
    initialState: defaultState,
    reducers: {
        userLogin: (state, action) => {
            return {
                ...state,
                user: action.payload
            }
        },
        userLogout: (state, action) => {
            return {
                ...state,
                user: {}
            }
        },

    }
})

export const {
    userLogin, userLogout
} = userSlice.actions

export const userReducer = userSlice.reducer;

