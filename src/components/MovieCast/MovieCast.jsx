import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { searchMovieCastById } from "../../services/api";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import css from "./MovieCast.module.css";

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCastById() {
      try {
        setLoading(true);
        const { cast } = await searchMovieCastById(movieId);
        setMovieCast(cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieCastById();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movieCast && (
        <ul className={css.movieCastList}>
          {movieCast.map((actor) => {
            return (
              <li className={css.movieCastListItem} key={actor.id}>
                <img
                  className={css.movieCastListImg}
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
                <div className={css.movieCastListInfoBox}>
                  <p>Actor: {actor.name}</p>
                  <p>Character: {actor.character}</p>
                  <p>Popularity: {actor.popularity}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MovieCast;
