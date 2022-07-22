import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
    addFriend: [
        {id:Date.now(),name:"Trần Quang Thọ",imageURL:"https://img.thuthuatphanmem.vn/uploads/2018/10/13/anh-dai-dien-kpop-dep_041804115.jpg"},
        {id:Date.now(),name:"Cao Xuân Bách",imageURL:"https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-nguoi-giau-mat-nam.jpg"},
        {id:Date.now(),name:"Cao Xuân Bách",imageURL:"https://i.pinimg.com/736x/85/fb/16/85fb16dba9ca7ddbd02a2f9fa2813c6d.jpg"},
        {id:Date.now(),name:"Cao Xuân Bách",imageURL:"https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1-537x600.jpg"},
        {id:Date.now(),name:"Cao Xuân Bách",imageURL:"https://upanh123.com/wp-content/uploads/2021/01/anh-dai-dien-chat-cho-nu15-1.jpg"},
    ],
}

const FriendSlice = createSlice({
    name: 'addFriend',
    initialState: defaultState,
    reducers: {
        friendLy: (state, action) => {
            console.log("action.payload :",action.payload);
            return {
                ...state,
                addFriend: action.payload
            }
        },
    }
})

export const {
    friendLyr
} = FriendSlice.actions

export const FriendReducer = FriendSlice.reducer;

