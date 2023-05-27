import React, { useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./assets/search.svg"

function App() {
  const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";
  const [search ,setSearch] = React.useState("")
  const [movies,setMovies] = React.useState([])
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
    }
  useEffect(()=>{
      searchMovies("batman")
  },[]); 
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for movies"
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(search)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie,index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
}

export default App;
