import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title, movies);
  return (
    <div className="text-white">
      <h2>{title}</h2>
      <div className="flex overflow-x-scroll m-5">
        <div className="flex">
          {movies &&
            movies.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
