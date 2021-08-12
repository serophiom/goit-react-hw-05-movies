import { useState, useEffect, lazy, Suspense } from "react";
import { useParams, Link, useRouteMatch, Route, useHistory, useLocation } from "react-router-dom";
import * as moviesFetch from '../../moviesFetch';
import './MovieDetailsPage.css';
import { HiArrowLeft } from 'react-icons/hi';

const MoviesCast = lazy(() => import('../Cast/Cast.js'));
const MoviesReviews = lazy(() => import('../Reviews/Reviews.js'));

export default function MovieDetailsView() {
    const history = useHistory();
    const location = useLocation();

    const { url } = useRouteMatch();
    const [movie, setMovie] = useState(null);
    
    const {movieId} = useParams();
    useEffect(() => {
        moviesFetch.fetchMoviesFullInfo(movieId).then(setMovie);
    }, [movieId]);

    const onGoBack = () => {
        history.push(location?.state?.from ?? '/');
      };

    return (
        <div className="container">

        <button className="btn-back" onClick={onGoBack} aria-label="Go back">
            <HiArrowLeft className="arrow" />
            <span className="span-back">Go back</span>
        </button>

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
                    {movie.genres.length > 0 && (
                        <>
                        <p>Genres</p>
                        <ul className="genres">
                        {movie.genres.map(item => (
                            <li key={item.id}>
                                {item.name}
                            </li> 
                        )   
                        )}
                        </ul>
                        </>
                    )}
                    
                </div> 
               
                </>}
            </div>
            <div className="movie-reviews">
                <p>Aditional information</p>
                <p className="cast-link"><Link to={`${url}/cast`}>Cast</Link></p>
                <p className="reviews-link"><Link to={`${url}/reviews`}>Reviews</Link></p>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route path="/movies/:moviesId/cast">
                        <MoviesCast />
                    </Route>

                    <Route path="/movies/:moviesId/reviews">
                        <MoviesReviews />
                    </Route>
                </Suspense>
                
            </div>
        </div>

    )
}