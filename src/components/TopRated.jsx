import { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/constants';
import MovieCard from './MovieCard';

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTopRated = async()=> {
      const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
      const data = await response.json();
      setMovies(data.results);
    }
    getTopRated();
  }, []);

  return (
     <div className="md:min-h-screen bg-[rgba(0,0,0,0.9)] text-white p-8 pt-30 ">
      <h1 className="md:text-3xl font-bold mb-6">Top Rated Movies</h1>
      <div className="flex flex-wrap gap-11 cursor-pointer">
        {movies?.map((movie) => (
          <MovieCard  key={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            releaseDate={movie.release_date}
            showDetails={true}  />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
