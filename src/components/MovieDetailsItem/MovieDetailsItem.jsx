import css from "./MovieDetailsItem.module.css";

const MovieDetailsItem = ({ movie }) => {
  return (
    <div className={css.movieItem}>
      <img
        className={css.movieItemImg}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={css.movieItemInfo}>
        <p className={css.movieItemTitle}>{movie.title}</p>
        {movie.overview && (
          <p className={css.movieItemInfoText}>Overview: {movie.overview}</p>
        )}
        {movie.genres.length !== 0 && (
          <div className={css.movieItemGenresBox}>
            <p className={css.movieItemInfoText}>Genres:</p>
            <ul className={css.movieItemGenresList}>
              {movie.genres.map((genre) => {
                return (
                  <li className={css.movieItemInfoText} key={genre.id}>
                    {genre.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <p className={css.movieItemInfoText}>
          Release date: {movie.release_date}
        </p>
        <p className={css.movieItemInfoText}>
          Vote average: {movie.vote_average}
        </p>
      </div>
    </div>
  );
};

export default MovieDetailsItem;
