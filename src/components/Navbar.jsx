import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
     const [showMovieMenu, setShowMovieMenu] = useState(false);
    return( 
<div className="flex flex-col  md:flex-row gap-6 text-white font-semibold text-lg">
            <Link to="/browse" className="hover:text-red-500 ">
              Home
            </Link>
            <Link to="/tvshows" className="hover:text-red-500">
              TV Shows
            </Link>
            <div className="relative">
              <span
                className="cursor-pointer hover:text-red-500"
                onClick={() => setShowMovieMenu(!showMovieMenu)}
              >
                Movies
              </span>

              {showMovieMenu && (
                <div className="absolute flex flex-col bg-white text-black shadow-md p-2 rounded mt-2 z-50 space-x-4 min-w-max">
                  <Link
                    to="/movies/now-playing"
                    className="whitespace-nowrap hover:text-red-500 px-2 py-1"
                  >
                    Now Playing
                  </Link>
                  <Link
                    to="/movies/top-rated"
                    className="whitespace-nowrap hover:text-red-500 px-2 py-1"
                  >
                    Top Rated
                  </Link>
                  <Link
                    to="/movies/upcoming"
                    className="whitespace-nowrap hover:text-red-500 px-2 py-1"
                  >
                    Upcoming
                  </Link>
                </div>
              )}
            </div>
          </div>)
};
export default Navbar;