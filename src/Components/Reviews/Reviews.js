import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import * as moviesFetch from '../../moviesFetch';
import './Reviews.css';

export default function MoviesCast() {
    const [reviews, setReviews] = useState(null);

    const { moviesId } = useParams();
   
    useEffect(() => {
        moviesFetch.fetchMoviesReviews(moviesId).then(response => setReviews(response.results)); 
    }, [moviesId])



    return (
        <div>
            {/* {if (reviews === null) {
                <p>We don't have any reviews</p>
            }} */}
            

            <ul className="reviews-card">
            {reviews && reviews.map(review =>
            <li key={review.id}>
                <p>Author {review.author}</p>
                <p>{review.content}</p>
            </li>
            )}
        </ul>
        </div>
    )
}   