import { createSlice } from "@reduxjs/toolkit";
const init = {
  value: 0,
};
export const counter = createSlice({
  name: "counter",
  initialState: init,
  reducers: {
    add: (state) => {
      state.value++;
    },
    sub: (state) => {
      state.value--;
    },
    rest: (state) => {
      state.value = 0;
    },
    addNumber: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { add, sub, rest, addNumber } = counter.actions;
export default counter.reducer;
