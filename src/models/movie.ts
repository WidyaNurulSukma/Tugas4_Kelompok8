// Struktur File:
// 1. src/index.ts - File utama untuk server
// 2. src/routes/movies.ts - Router untuk endpoint movies
// 3. src/models/movie.ts - Interface untuk model Movie
// 4. src/data/movies.ts - Data temporary (menggantikan database)
// 5. package.json - Konfigurasi project
// 6. tsconfig.json - Konfigurasi TypeScript

// Pertama, kita buat interface untuk model Movie
// src/models/movie.ts
export interface Movie {
    id: number;
    title: string;
    year: number;
    genre: string[];
    director: string;
    rating: number;
  }