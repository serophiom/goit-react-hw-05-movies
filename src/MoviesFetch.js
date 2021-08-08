const ApiKey = 'e563734a6bbd21067790abd0a9925d86';

export function fetchMoviesTrending () {
        return fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${ApiKey}`)
        .then(response => response.json());
}

export function fetchMoviesSearch (query) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${query}&page=1&include_adult=false`)
    .then(response => response.json());
}

export function fetchMoviesFullInfo (movieid) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${ApiKey}&language=en-US`)
    .then(response => response.json());
}

export function fetchMoviesActors (movieid) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${ApiKey}&language=en-US`)
    .then(response => response.json());
}

export function fetchMoviesReviews (movieid) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=${ApiKey}&language=en-US&page=1`)
    .then(response => response.json());
}