import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: [], // Initialize as an object containing the array
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload); // Add the item to the array // Update the items array in state
    },
  },
});

export const { addItem } = cardSlice.actions;
export default cardSlice.reducer;
