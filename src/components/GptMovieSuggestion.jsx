import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames || !movieResults) return null;

  return (
    <div className="p-4 m-4 bg-[rgba(0,0,0,0.9)] text-white">
      <div>
        {movieNames.map((movieName, index) => {
          const movies = movieResults[index];
          if (!movies || movies.length === 0) return null;

          return (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movies}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
