import React,{ useEffect } from 'react'

import MovieListing from "../MovieListing/MovieListing"

import { useDispatch } from 'react-redux'
import {  fetchAsyncMovies
  , fetchAsyncShows
  ,} from '../../features/movie/movieSlice'
// import Header from '../Header/Header'

const Home = () => {
  const dispatch = useDispatch();

  const movieText = "Thor";
  const  showText = "Iron Man";

  useEffect(() => {     
    dispatch(fetchAsyncMovies(movieText));
     dispatch(fetchAsyncShows( showText));
     

  
  }, [dispatch]);
  
  return (
    <div>

      {/* <div><Header/></div> */}
      
      <div className='banner-img'></div>
      <MovieListing/>
    </div>
  )
}
export default Home;