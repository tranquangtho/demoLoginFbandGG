import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
    user: {
        id: Date.now(),
        name: " Trần Quang Thọ",
        imageURL: "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg",
        userName: "tho",
        passWord: "123456"
    },
    activeId: null,
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

