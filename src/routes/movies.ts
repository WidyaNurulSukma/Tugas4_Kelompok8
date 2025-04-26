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

// PUT - Mengupdate film (untuk nilai plus)
router.put('/:id', (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const updatedMovie = updateMovie(id, req.body);
      
      if (!updatedMovie) {
        return res.status(404).json({ message: 'Film tidak ditemukan' });
      }
      
      res.json({ message: 'Film berhasil diupdate', data: updatedMovie });
    } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
  });
  
  // DELETE - Menghapus film (untuk nilai plus)
  router.delete('/:id', (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = deleteMovie(id);
      
      if (!deleted) {
        return res.status(404).json({ message: 'Film tidak ditemukan' });
      }
      
      res.json({ message: 'Film berhasil dihapus' });
    } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
  });
  
  // GET - Mencari film berdasarkan kata kunci (untuk nilai plus)
  router.get('/search/:query', (req: Request, res: Response) => {
    const query = req.params.query;
    const movies = searchMovies(query);
    res.json({ data: movies });
  });
  
  // GET - Filter film berdasarkan rating minimum (untuk nilai plus)
  router.get('/filter/rating/:rating', (req: Request, res: Response) => {
    const minRating = parseFloat(req.params.rating);
    
    if (isNaN(minRating)) {
      return res.status(400).json({ message: 'Rating harus berupa angka' });
    }
    
    const movies = getMoviesByMinRating(minRating);
    res.json({ data: movies });
  });
  
  export default router;
