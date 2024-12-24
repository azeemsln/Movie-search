import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./Components/MovieCard";
import SearchBar from "./Components/SearchBar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyapi.online/api/movies")
      .then((response) => {
        setMovies(response.data);
        setFilteredMovies(response.data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const handleSearch = (searchTerm) => {
    const results = movies.filter((movie) =>
      movie.movie.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(results);
  };

  return (
    <div>
      <h1>Movie Database</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="movie-list">

        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
