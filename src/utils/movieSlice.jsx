import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingmovies: null,
    trailerVideo: null,
    popularmovies: null,
    topRatedmovies: null,
    upComingmovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularmovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedmovies = action.payload;
    },
     addUpComingMovies: (state, action) => {
      state.upComingmovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addPopularMovies,addTopRatedMovies,addUpComingMovies, addTrailerVideo } =
  movieSlice.actions;
export default movieSlice.reducer;
