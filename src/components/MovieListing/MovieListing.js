import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movie/movieSlice";
import MovieCard from "../MovieCard/MovieCard.js";
import "./MovieListing.css"

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="shows-error">
        <h3> i am Error
          {/* {shows.Error} */}
          </h3>
      </div>
    );
  console.log(movies);
  return(
<div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      {/* <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div> */}
    </div>
  )
  //  <div>MovieListing</div>;
};
export default MovieListing;
