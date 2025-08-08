import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
const SecondContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
     <div className=' bg-black '>
    <div className='mt-0 md:-mt-30 pl-2 md:pl-5 relative z-20'>
       <MovieList title={"Now Playing"} movies ={movies.nowPlayingmovies}/> 
      <MovieList title={"Popluar"} movies ={movies.popularmovies}/>
       <MovieList title={"Top Rated"} movies ={movies.topRatedmovies}/> 
       <MovieList title={"Upcoming Movies"} movies ={movies.upComingmovies}/> 
    </div>
     
    </div>
  );
}

export default SecondContainer ;