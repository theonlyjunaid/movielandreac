
import React, { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//  7a3dff41
const API_URL = `http://www.omdbapi.com?apikey=7a3dff41`
// const movie1 = {
//     "Title": "Lois & Clark: The New Adventures of Superman",
//     "Year": "1993–1997",
//     "imdbID": "tt0106057",
//     "Type": "series",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZTU1ZGFjNzEtZWYzZC00ZmI0LTg2NmMtN2YyNTY4YzhlODIyXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg"
// }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchItems, setSearchItems] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies(`doraemon`)
    }, [])
    return (
        <div className='app'>
            <h1>Movie land</h1>
            <div className='search'>
                <input
                    placeholder='Search for Movies'
                    value={searchItems}
                    onChange={(e) => setSearchItems(e.target.value)}
                />
                <img src={SearchIcon} onClick={() => searchMovies(searchItems)} />
            </div>
            {movies.length > 0 ?
                (<div className='container'>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>) :
                (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}
export default App;