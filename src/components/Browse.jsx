import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondContainer from './SecondContainer';
import MainContainer from './MainContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
     
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
        )}
    </div>
  );
};

export default Browse;
