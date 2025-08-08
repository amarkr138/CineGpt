import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { LOGO_BACK } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <>
      <div className=" fixed -z-10">
        <img className='h-screen object-cover md:h-auto' src={LOGO_BACK} alt="logo" />
      </div>
      <div className=''>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearchPage;
