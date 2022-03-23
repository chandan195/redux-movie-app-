import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import { APIKey } from '../../common/apis/MovieApiKey'
import movieApi from '../../common/apis/movieApi';



export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",


    async (term) => {
      // const movieText = "Harry";
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=movie`
      );
      return response.data;
    }
  );

  export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    

    async (term) => {
      // const seriesText = "Harry";
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=series`
      );
      return response.data;
    }
  );

  
  export const fetchAsyncMovieOrShowsDetails = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowsDetail",
    async (id) => {
      
      const response = await movieApi.get(
        `?apiKey=${APIKey}&i=${id}&Plot=full`
      );
      return response.data;
    }
  );

const initialState ={
    movies:{},
    shows:{},
    selectMovieOrShow:{},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
      removeSelectedMovieOrShow: (state) => {
        state.selectMovieOrShow = {};
      },
    },
    extraReducers: {
      [fetchAsyncMovies.pending]: () => {
        console.log("Pending");
      },
      [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, movies: payload };
      },
      [fetchAsyncMovies.rejected]: () => {
        console.log("Rejected!");
      },
      [fetchAsyncShows.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, shows: payload };
      },
      [fetchAsyncMovieOrShowsDetails.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, selectMovieOrShow: payload };
      },
    },
  });
    export const { removeSelectedMovieOrShow} = movieSlice.actions;
    export const getAllMovies = (state) => state.movies.movies;
    export const getAllShows = (state) => state.movies.shows;
    export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
    
    
    export default movieSlice.reducer;

