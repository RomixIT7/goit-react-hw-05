import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";

import { searchMovieById } from "../../services/api";

import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieDetailsItem from "../../components/MovieDetailsItem/MovieDetailsItem";

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);

import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function getMovieById() {
      try {
        setLoading(true);
        const response = await searchMovieById(movieId);
        setMovie(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieById();
  }, [movieId]);

  return (
    <>
      <Link className={css.goBackLink} to={backLinkRef.current}>
        Go back
      </Link>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movie && <MovieDetailsItem movie={movie} />}
      {movie && (
        <>
          <div className={css.additionalInfoBox}>
            <p className={css.additionalInfoTitle}>Additional information</p>
            <ul className={css.additionalInfoList}>
              <li>
                <Link className={css.additionalInfoListLink} to="cast">
                  Cast
                </Link>
              </li>
              <li>
                <Link className={css.additionalInfoListLink} to="reviews">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
