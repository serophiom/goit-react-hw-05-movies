import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as moviesFetch from '../moviesFetch';
import '../styles.css';

export default function HomeView() {
    // const {url} = useRouteMatch();
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        moviesFetch.fetchMoviesTrending().then(response => setMovies(response.results)); 
    }, [])
    
    console.log(movies)
    return (
        <div className="container">
        <h1>Trending today</h1>
        <ul>
            {movies && movies.map(movie =>
            <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}{movie.name}</Link></li>
            )}
        </ul>
        </div>
    )
}