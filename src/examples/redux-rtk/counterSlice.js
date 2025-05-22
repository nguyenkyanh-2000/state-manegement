import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    name: "John",
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    updateName: (state) => {
      state.name = state.name === "John" ? "Jane" : "John";
    },
  },
});

export const { increment, decrement, updateName } = counterSlice.actions;
export default counterSlice.reducer;
