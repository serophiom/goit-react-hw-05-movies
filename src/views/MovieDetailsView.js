import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moviesFetch from '../moviesFetch';

export default function MovieDetailsView() {
    const [movie, setMovie] = useState(null);
    
    const {movieId} = useParams();

    useEffect(() => {
        moviesFetch.fetchMoviesFullInfo(movieId).then(setMovie);
    }, [movieId]);
    
    // const genres = movie.map(item => item.genres.name);
    // console.log(genres);

    console.log(movie);

    const moviePoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <div className="container">
            <h1>Movie {movieId}</h1>

            

            {movie && <>
                <img src={moviePoster} alt={movie.title}/>
                <h2>{movie.title}</h2>
                <p>User Score {movie.popularity}%</p>
                <p>Overview</p>
                <p>{movie.overview}</p>
                <p>Genres</p>
                <p>{movie.genres.name}</p>
                
            </>}
        </div>
    )
}