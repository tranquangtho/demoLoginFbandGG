const initialState = {
    user: {},
    activeId:null
};
export default function itemReducer(state = initialState, action) {

    switch (action.type) {
        case 'LOGIN_USER_FACEBOOK':
            console.log("action.payload:",action.payload);
            return {
                ...state,
                user:action.payload           
            }
        case 'LOG_OUT_FACEBOOK':
            console.log("user_name:", action.data);
            return {
                user:{}
            }

        default:
            return state;
    }
}

// import { createSlice } from '@reduxjs/toolkit'
// import produce from 'immer';
// const defaultState = {
//     user: [],
// }

// const UserSlice = createSlice({
//     name: 'User',
//     initialState: defaultState,
//     reducers: {
//         LoginUser: (state, action) => {
//             console.log("action.payload Login : " ,action.payload);
//             return {
//                 ...state,
//                 user: action.payload,
//             }
//         },
//         LogOutUser:(state,action)=>{
//             console.log("action.payload LogOut: ",action.payload);
//             return {
//                 ...state,
//                 user:[]
//             }
//         }

//     }
// })

// export const {
//     LoginUser,
//     LogOutUser
// } = UserSlice.actions

// export const UserReducer = UserSlice.reducer;