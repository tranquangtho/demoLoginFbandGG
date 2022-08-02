import {createSlice} from '@reduxjs/toolkit';

const defaultState = {
  current: {},
};

const currentSlice = createSlice({
  name: 'current',
  initialState: defaultState,
  reducers: {
    currentLogin: (state, action) => {
      console.log("action.payload  current : ", action.payload);
      return {
        ...state,
        current: action.payload,
      };
    },
  },
});

export const {currentLogin} = currentSlice.actions;

export const currentReducer = currentSlice.reducer;
