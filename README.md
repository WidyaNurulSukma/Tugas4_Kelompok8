# Tugas 4_Kelompok 8
- Mila Lestari (2208107010002)
- Widya Nurul Sukma (2208107010054)
- Pryta Rosela (2208107010046)

# Movie API

A simple RESTful API for movie data management, built with Express and TypeScript.

## Project Overview

This project is a simple API that provides endpoints to manage movie data with features like:
- Viewing all movies
- Viewing a specific movie by ID
- Adding new movies
- Updating existing movies
- Deleting movies
- Searching movies by title or genre
- Filtering movies by minimum rating

## Features

- **RESTful API Design**: Follows REST conventions for predictable endpoints
- **TypeScript Implementation**: Type safety and better code organization
- **In-Memory Data Storage**: Movies stored in memory (can be extended to a database)
- **Input Validation**: Basic validation to ensure data integrity
- **Error Handling**: Proper error responses with appropriate HTTP status codes

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/movies` | Get all movies |
| GET | `/movies/:id` | Get a specific movie by ID |
| POST | `/movies` | Add a new movie |
| PUT | `/movies/:id` | Update an existing movie |
| DELETE | `/movies/:id` | Delete a movie |
| GET | `/movies/search/:query` | Search movies by title or genre |
| GET | `/movies/filter/rating/:rating` | Filter movies by minimum rating |

## Data Structure

Each movie has the following attributes:
```json
{
  "id": 1,
  "title": "Inception",
  "year": 2010,
  "genre": ["Sci-Fi", "Action", "Thriller"],
  "director": "Christopher Nolan",
  "rating": 8.8
}
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/movie-api.git
cd movie-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Start the production server:
```bash
npm start
```

The server will be running at `http://localhost:3000`.

## API Usage Examples

### Get All Movies
```bash
curl -X GET http://localhost:3000/movies
```

### Get Movie by ID
```bash
curl -X GET http://localhost:3000/movies/1
```

### Add New Movie
```bash
curl -X POST http://localhost:3000/movies ^
 -H "Content-Type: application/json" ^
 -d "{\"title\":\"The Dark Knight\",\"year\":2008,\"genre\":[\"Action\",\"Crime\",\"Drama\"],\"director\":\"Christopher Nolan\",\"rating\":9.0}"
```

### Update Movie
```bash
curl -X PUT http://localhost:3000/movies/1 ^
 -H "Content-Type: application/json" ^
 -d "{\"rating\": 9.5}"
```

### Delete Movie
```bash
curl -X DELETE http://localhost:3000/movies/1
```

### Search Movies
```bash
curl -X GET http://localhost:3000/movies/search/action
```

### Filter Movies by Rating
```bash
curl -X GET http://localhost:3000/movies/filter/rating/9.0
```

## Project Structure
```
movie-api/
├── src/
│   ├── data/       # Data store
│   ├── models/     # TypeScript interfaces
│   ├── routes/     # API routes
│   └── index.ts    # Main application file
├── package.json
└── tsconfig.json
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
