// src/data/movies.ts
import { Movie } from '../models/movie';

let movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: ["Sci-Fi", "Action", "Thriller"],
    director: "Christopher Nolan",
    rating: 8.8
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    genre: ["Crime", "Drama"],
    director: "Francis Ford Coppola",
    rating: 9.2
  },
  {
    id: 3,
    title: "Pulp Fiction",
    year: 1994,
    genre: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    rating: 8.9
  }
];

export const getMovies = (): Movie[] => {
  return movies;
};

export const getMovieById = (id: number): Movie | undefined => {
  return movies.find(movie => movie.id === id);
};

export const addMovie = (movie: Omit<Movie, 'id'>): Movie => {
  const newId = movies.length > 0 ? Math.max(...movies.map(m => m.id)) + 1 : 1;
  const newMovie: Movie = { ...movie, id: newId };
  movies.push(newMovie);
  return newMovie;
};

// Fungsi tambahan untuk nilai plus
export const updateMovie = (id: number, updatedMovie: Partial<Movie>): Movie | null => {
  const index = movies.findIndex(movie => movie.id === id);
  if (index !== -1) {
    movies[index] = { ...movies[index], ...updatedMovie };
    return movies[index];
  }
  return null;
};

export const deleteMovie = (id: number): boolean => {
  const initialLength = movies.length;
  movies = movies.filter(movie => movie.id !== id);
  return initialLength > movies.length;
};

// Fungsi tambahan lain - pencarian film berdasarkan judul/genre
export const searchMovies = (query: string): Movie[] => {
  query = query.toLowerCase();
  return movies.filter(movie => 
    movie.title.toLowerCase().includes(query) || 
    movie.genre.some(g => g.toLowerCase().includes(query))
  );
};

// Fungsi untuk filter berdasarkan rating minimum
export const getMoviesByMinRating = (minRating: number): Movie[] => {
  return movies.filter(movie => movie.rating >= minRating);
};