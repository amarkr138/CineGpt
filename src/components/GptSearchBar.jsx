import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import ai from '../utils/geminiai';
import { API_OPTIONS } from '../utils/constants';
import { addMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

const searchMovieTMDB =  async (movie) =>{
  const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
  const json = await data.json();
  return json.results;
};

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      'Act as a Movie Recommendation system and suggest some movies for the query : ' +
      searchText.current.value +
      '. only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya';

    async function main() {
      const geminiResults = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: gptQuery,
      });
      console.log(geminiResults.text);
      const geminiMovies = geminiResults.text?.split(",");
     
      const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
dispatch(addMovieResult({ movieNames: geminiMovies, movieResults: tmdbResults }));
    }
    main();
  };
  return (
    <div className="pt-[35%]  md:pt-[10%] flex justify-center">
      <form
        className="w-full  md:w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchplaceholder}
          className="bg-gray-300 py-2 px-4 m-3 rounded-lg col-span-9 "
        />
        <button
          className="text-white bg-red-700 px-4 py-2 m-3 rounded-lg col-span-3  cursor-pointer "
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
