import React from "react";
import { useEffect, useState } from "react";
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";

//created based on toturial from https://www.youtube.com/watch?v=b9eMGE7QtTk
//e66cd092


const API_URL = 'http://www.omdbapi.com/?apikey=e66cd092';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([''])

    const searchMoviesBytitle = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}&plot=full`);
        const data = await response.json();

        setMovies(data.Search);
    }

// const movie1 = {
//     "Title": "Amazing Spiderman Syndrome",
//     "Year": "2012",
//     "imdbID": "tt2586634",
//     "Type": "movie",
//     "Poster": "N/A"
// };

    useEffect(() => {
        searchMoviesBytitle('SpiderMan')
    }, []);
    return (
    <div className="app">  
        <h1>MovieLand</h1>

        <div className="search">
            <input placeholder="Search for movies" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}>
            </input>
            <img 
            src={SearchIcon}
            alt="search"
            onClick={() => searchMoviesBytitle((searchTerm))}/>
        </div>
        {movies?.length > 0
            ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie = {movie}/>
                    ))}
                </div>
            
            ) :(
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )
        }
        </div>
    )
}

export default App