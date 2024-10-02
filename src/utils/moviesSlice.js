import { createSlice } from "@reduxjs/toolkit";

const nowPlayingSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlaying, addTrailerVideo, addPopular } =
  nowPlayingSlice.actions;
export default nowPlayingSlice.reducer;
