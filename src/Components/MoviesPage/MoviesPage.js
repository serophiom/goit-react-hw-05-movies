import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesFetch from '../../moviesFetch';
// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MoviesView () {
    const [movieName, setMovieName] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    useEffect (() => {
        if (movieName === '') {
            return;
        }

        moviesFetch.fetchMoviesSearch(movieName).then(response => setSearchResult(response.results));
    }, [movieName]);

    const handleNameChange = event => {
            setMovieName(event.currentTarget.value.toLowerCase());
        };

    const handleSearchSubmit = event => {
        event.preventDefault();

        if (movieName.trim() === '') {
            toast.error('Enter the image name');
                return;
            }

        setMovieName('');
    };
 
    console.log(movieName);
    console.log(searchResult);

    return (
        <div className="container">
        <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSearchSubmit}>
            <input
                className="SearchForm-input"
                type="text"
                autocomplete="off"
                autofocus
                   placeholder="Search movies"
                value={movieName}
                onChange={handleNameChange}
                />
                <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
                </button>
            </form>
            </header>
            <div>
               <ul>
                {searchResult && searchResult.map(result =>
                <li key={result.id}>
                    <Link to={`/movies/${result.id}`}>{result.title}{result.name}</Link></li>
                )}
                </ul> 
            </div>
        </div>
        );

}