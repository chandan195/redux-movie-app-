// import { configureStore } from "@testing-library/react";
import { configureStore } from '@reduxjs/toolkit'
import   moviesReducer from "./movie/movieSlice"
export const store = configureStore({
    reducer: {
       movies: moviesReducer
    },
  });
  