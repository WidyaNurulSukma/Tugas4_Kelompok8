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
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    rating: 9.0
  },
  {
    id: 5,
    title: "Interstellar",
    year: 2014,
    genre: ["Sci-Fi", "Adventure", "Drama"],
    director: "Christopher Nolan",
    rating: 8.6
  },
  {
    id: 6,
    title: "Parasite",
    year: 2019,
    genre: ["Thriller", "Drama"],
    director: "Bong Joon Ho",
    rating: 8.6
  },
  {
    id: 7,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: ["Drama"],
    director: "Frank Darabont",
    rating: 9.3
  },
  {
    id: 8,
    title: "Fight Club",
    year: 1999,
    genre: ["Drama", "Thriller"],
    director: "David Fincher",
    rating: 8.8
  },
  {
    id: 9,
    title: "Avengers: Endgame",
    year: 2019,
    genre: ["Action", "Adventure", "Sci-Fi"],
    director: "Anthony Russo, Joe Russo",
    rating: 8.4
  },
  {
    id: 10,
    title: "Forrest Gump",
    year: 1994,
    genre: ["Drama", "Romance"],
    director: "Robert Zemeckis",
    rating: 8.8
  }
