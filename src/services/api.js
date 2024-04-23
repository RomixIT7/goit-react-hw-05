import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const options = {
  params: { language: "en-US" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjU0OTYwMWU4OTQzZDkwMzRkN2EyYjRmODE0ODQzYSIsInN1YiI6IjY2MjExMTMxZTRiNTc2MDE2NGJiZjE3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XcwVd-pqTfKByYnvyFx1oZfc59TEnrzNHxt8kA4E5M4",
  },
};

export const searchTrendingMovies = async () => {
  const { data } = await instance.get("/trending/movie/day?", options);
  return data;
};

export const searchMovies = async (query = "") => {
  const { data } = await instance.get(`/search/movie?&query=${query}`, options);
  return data;
};

export const searchMovieById = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}`, options);
  return data;
};

export const searchMovieCastById = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}/credits`, options);
  return data;
};

export const searchMovieReviewsById = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`, options);
  return data;
};
