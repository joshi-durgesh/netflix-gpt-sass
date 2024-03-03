import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    tvShows: null,
    hindiMovies: null,
    trailerVideo: null,
    animatedMovies: null,
  },
  reducers: {
    addHindiMovies: (state, action) => {
      state.hindiMovies = action.payload;
    },
    addAnimatedMovies: (state, action) => {
      state.animatedMovies = action.payload;
    },
    addTvShows: (state, action) => {
      state.tvShows = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addAnimatedMovies,
  addHindiMovies,
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTvShows,
} = moviesSlice.actions;

export default moviesSlice.reducer;
