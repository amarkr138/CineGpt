import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    // if (!movies || movies.length === 0) return null;
  return (
    <div className='px-6 '>
        <h1 className='text-lg md:text-2xl text-white  py-4'>{title}</h1>
      <div className='flex overflow-x-scroll transparent-scrollbar '>
        <div className='flex gap-4  '>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
