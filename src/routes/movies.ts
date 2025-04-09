// src/routes/movies.ts
import express, { Request, Response } from 'express';
import { Movie } from '../models/movie';
import { 
  getMovies, 
  getMovieById, 
  addMovie, 
  updateMovie, 
  deleteMovie, 
  searchMovies,
  getMoviesByMinRating
} from '../data/movies';

const router = express.Router();

// GET - Mendapatkan semua film
router.get('/', (req: Request, res: Response) => {
  const movies = getMovies();
  res.json({ data: movies });
});

// GET - Mendapatkan film berdasarkan ID
router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const movie = getMovieById(id);
  
  if (!movie) {
    return res.status(404).json({ message: 'Film tidak ditemukan' });
  }
  
  res.json({ data: movie });
});

// POST - Menambahkan film baru
router.post('/', (req: Request, res: Response) => {
  try {
    const { title, year, genre, director, rating } = req.body;
    
    // Validasi data
    if (!title || !year || !genre || !director || rating === undefined) {
      return res.status(400).json({ message: 'Data film tidak lengkap' });
    }
    
    const newMovie = addMovie({
      title,
      year,
      genre,
      director,
      rating
    });
    
    res.status(201).json({ message: 'Film berhasil ditambahkan', data: newMovie });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

