import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORT_LANGUAGE } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional icons

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSignOut, setShowSignOut] = useState(false);

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate('/error');
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageClick = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-4 sm:px-6 py-3 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link to="/browse">
          <img className="w-32 cursor-pointer" src={LOGO} alt="logo" />
        </Link>

        {/* Desktop navbar */}
        <div className="hidden md:block">{user && <Navbar />}</div>
      </div>

      {/* Desktop user actions */}
      {user && (
        <div className="hidden md:flex items-center gap-3">
          {showGptSearch && (
            <select
              className="bg-black text-white px-3 py-2 rounded-lg cursor-pointer"
              onChange={handleLanguageClick}
            >
              {SUPPORT_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded-lg cursor-pointer"
            onClick={handleGptSearch}
          >
            {showGptSearch ? 'Home' : 'Search'}
          </button>
          <div className="relative">
            <img
              className="w-9 h-9 rounded-lg my-2 mr-7 cursor-pointer"
              alt="usericon"
              src={user.photoURL}
              onClick={() => setShowSignOut(!showSignOut)} // toggle on click
            />
            {showSignOut && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-50">
                <button
                  onClick={handleSignOut}
                  className="bg-gray-800 text-white text-sm font-semibold px-4 py-1 rounded shadow whitespace-nowrap cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hamburger icon for mobile */}
      {user && (
        <div className="md:hidden   ">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white " />
            )}
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      {user && menuOpen && (
        <div className="absolute top-16 right-4 bg-black rounded-lg p-4 w-50 flex flex-col space-y-4 md:hidden z-20 shadow-lg max-h-[80vh] overflow-y-auto ">
          <Navbar /> 
          {showGptSearch && (
            <select
              className="bg-gray-700 text-white px-2 py-1 rounded"
              onChange={handleLanguageClick}
            >
              {SUPPORT_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded"
            onClick={handleGptSearch}
          >
            {showGptSearch ? 'Home' : 'Search'}
          </button>
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-2 rounded "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
