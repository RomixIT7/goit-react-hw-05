import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { searchMovieReviewsById } from "../../services/api";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviewsById() {
      try {
        setLoading(true);
        const { results } = await searchMovieReviewsById(movieId);
        setMovieReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieReviewsById();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {Array.isArray(movieReviews) && movieReviews.length !== 0 && (
        <ul className={css.movieReviewsList}>
          {movieReviews.map((review) => {
            return (
              <li className={css.movieReviewsListItem} key={review.id}>
                <p>Author: {review.author}</p>
                <p>Review: {review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {Array.isArray(movieReviews) && movieReviews.length === 0 && (
        <p className={css.noReviewsText}>There are no reviews</p>
      )}
    </>
  );
};

export default MovieReviews;
