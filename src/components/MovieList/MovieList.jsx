import MovieListItem from "../MovieListItem/MovieListItem";

import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={css.movieList}>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return <MovieListItem key={movie.id} movie={movie} />;
        })}
    </ul>
  );
};

export default MovieList;
