import { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/constants';
import MovieCard from './MovieCard';

const UpComing = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getUpComing = async()=> {
      const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
      const data = await response.json();
      setMovies(data.results);
    }
    getUpComing();
  }, []);

  return (
     <div className="md:min-h-screen bg-[rgba(0,0,0,0.9)] text-white p-8 pt-30 ">
      <h1 className="md:text-3xl font-bold mb-6">Up Coming Movies</h1>
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

export default UpComing;
