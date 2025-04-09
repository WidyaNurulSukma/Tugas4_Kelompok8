// src/index.ts
import express, { Application, Request, Response } from 'express';
import moviesRouter from './routes/movies';

const app: Application = express();
const PORT: number = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/movies', moviesRouter);

// Home route
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'Selamat datang di API Film!',
    endpoints: {
      'GET /movies': 'Mendapatkan semua film',
      'GET /movies/:id': 'Mendapatkan film berdasarkan ID',
      'POST /movies': 'Menambahkan film baru',
      'PUT /movies/:id': 'Mengupdate film',
      'DELETE /movies/:id': 'Menghapus film',
      'GET /movies/search/:query': 'Mencari film berdasarkan kata kunci',
      'GET /movies/filter/rating/:rating': 'Filter film berdasarkan rating minimum'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

export default app;