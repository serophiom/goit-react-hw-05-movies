import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesFetch from '../../moviesFetch';
import SearchBar from '../SearchBar/SearchBar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MoviesView () {
    const history = useHistory();
    const location = useLocation();

    const [movieName, setMovieName] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        if (location.search === '') {
          return;
        }
        const movieQuery = new URLSearchParams(location.search).get('movie');
        setMovieName(movieQuery);
      }, [location.search]);


    useEffect (() => {
        if (movieName === '') {
            return;
        }

        moviesFetch.fetchMoviesSearch(movieName).then(response => setSearchResult(response.results));
    }, [movieName]);

    const handleSearchSubmit = (searchQuery) => {
        setMovieName(searchQuery);
        if (searchQuery.trim() === '') {
            toast.error('Enter the image name');
                return;
            }
            reset();

            history.push({ ...location, search: `movie=${searchQuery}` });
    };

    const reset = () => {
        setSearchResult(null);
      };

    return (
        <div className="container">
            <SearchBar onSubmit={handleSearchSubmit} />

            <ul>
            {searchResult && searchResult.map(result =>
            <li key={result.id}>
                 <Link to={{
                     pathname:`/movies/${result.id}`,
                     state: {from: location},
                    }}>
                    {result.title}{result.name}</Link></li>
            )}
            </ul> 
        </div>
        );
}