import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGpt = !state.showGpt;
    },
  },
});
export const { toggleGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
