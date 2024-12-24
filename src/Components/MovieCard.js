import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.movie}</h2>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieCard;
