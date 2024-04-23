import { useEffect, useState } from "react";

import { searchTrendingMovies } from "../../services/api.js";

import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import MovieList from "../../components/MovieList/MovieList.jsx";

import css from "./HomePage.module.css";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setLoading(true);
        const { results } = await searchTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {trendingMovies && (
        <>
          <p className={css.trendingTitle}>Trending today</p>
          <MovieList movies={trendingMovies} />
        </>
      )}
    </>
  );
};

export default HomePage;
