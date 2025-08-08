import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath, title, releaseDate, showDetails = false }) => {
  if(!posterPath) return null;
  return (
    <div className="w-35 md:w-48 lg:w-44 border border-gray-600 p-2 rounded-lg shadow-md bg-gray-900 text-white hover:scale-105 transition-transform duration-200 cursor-pointer">
      <img
        className="rounded-md mb-2"
        src={IMG_CDN_URL + posterPath}
        alt={title}
      />
      {showDetails && (
        <>
          <h3 className="text-sm font-semibold truncate">{title}</h3>
          <p className="text-xs text-gray-400">Release: {releaseDate}</p>
        </>
      )}
    </div>
  );
};

export default MovieCard;
