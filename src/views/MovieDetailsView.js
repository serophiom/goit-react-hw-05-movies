import { useState, useEffect } from "react";
import { useParams, Link, useRouteMatch, Route } from "react-router-dom";
import * as moviesFetch from '../moviesFetch';
import MoviesCast from './MoviesCast';
import MoviesReviews from './MoviesReviews';

export default function MovieDetailsView() {
    const { url } = useRouteMatch();
    const [movie, setMovie] = useState(null);
    
    const {movieId} = useParams();
    console.log(url);
    useEffect(() => {
        moviesFetch.fetchMoviesFullInfo(movieId).then(setMovie);
    }, [movieId]);
    
    // const genres = movie.map(item => item.genres.name);
    // console.log(genres);

    // console.log(movie);

    return (
        <div className="container">
            <div className="movie-card">
               <h1 className="movie-header">Movie {movieId}</h1>

                {movie && <>
                <div className="img-card">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                </div>
                <div>
                    <h2>{movie.title}</h2>
                    <p>User Score {movie.popularity}%</p>
                    <p>Overview</p>
                    <p>{movie.overview}</p>
                    <p>Genres</p>
                    <ul className="genres">
                        {movie.genres.map(item => (
                            <li>
                                {item.name}
                            </li> 
                        )
                            
                        )}
                    </ul>
                </div> 
               
                </>}
            </div>
            <div className="movie-reviews">
                <p>Aditional information</p>
                <p><Link to={`${url}/cast`}>Cast</Link></p>
                <p><Link to={`${url}/reviews`}>Reviews</Link></p>

                <Route path="/movies/:moviesId/cast">
                    <MoviesCast />
                </Route>

                <Route path="/movies/:moviesId/reviews">
                    <MoviesReviews />
                </Route>
            </div>
        </div>

    )
}