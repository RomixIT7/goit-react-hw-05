import { Link, useLocation } from "react-router-dom";

import css from "./MovieListItem.module.css";

const MovieListItem = ({ movie }) => {
  const location = useLocation();

  return (
    <li className={css.movieItem}>
      <Link
        state={location}
        className={css.movieLink}
        to={`/movies/${movie.id}`}
      >
        {movie.original_title}
      </Link>
    </li>
  );
};

export default MovieListItem;
