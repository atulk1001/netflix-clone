import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies.nowPlaying);
  return (
    movies.nowPlaying && (
      <div className="bg-black">
        <div className="-mt-48 relative z-20">
          <MovieList title={"Playing Now"} movies={movies.nowPlaying} />
        </div>
        <MovieList title={"Trending"} movies={movies.nowPlaying} />
        <MovieList title={"Popular"} movies={movies.popular} />
        <MovieList title={"Upcoming"} movies={movies.nowPlaying} />
      </div>
    )
  );
};

export default SecondaryContainer;
