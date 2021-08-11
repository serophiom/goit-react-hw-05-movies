import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import * as moviesFetch from '../../moviesFetch';
import './Cast.css';

export default function MoviesCast() {
    const [actors, setActors] = useState(null);

    const { moviesId } = useParams();
   
    useEffect(() => {
        moviesFetch.fetchMoviesActors(moviesId).then(response => setActors(response.cast)); 
    }, [moviesId])
    return (
        <ul className="actors-card">
            {actors && actors.map(actor =>
            <li key={actor.cast_id}>
                <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name}/>
                <p className="actor-name">{actor.name}</p>
                <p>Character: {actor.character}</p>
            </li>
            )}
        </ul>
    )
}