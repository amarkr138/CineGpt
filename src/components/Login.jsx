import { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGO_BACK, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
 

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClick = () => {
    const enteredName  = isSignInForm ? '' : name.current?.value?.trim();
    const enteredEmail  = email.current?.value?.trim();
    const enteredPassword  = password.current?.value?.trim();

    const message = checkValidData(enteredName, enteredEmail, enteredPassword);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: USER_AVATAR,
          })
            .then(() => {
               const {uid ,email,displayName, photoURL} = auth.currentUser;
                  dispatch(addUser({uid ,email,displayName, photoURL}));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + ' - ' + error.message);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          console.log(userCredential.user);
        })
        .catch((error) => {
          setErrorMessage(error.code + ' - ' + error.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className='h-screen object-cover md:h-auto'
          src={LOGO_BACK}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/4 md:w-3/12 absolute text-white  my-22 mx-auto left-0 right-0 p-12 bg-[rgba(0,0,0,0.8)] rounded-lg"
      >
        <h1 className="text-2xl font-bold py-2 ">
          {isSignInForm ? 'Sign In' : 'Sign up'}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-3 my-4 w-full bg-[rgba(55,65,81,0.6)] rounded-lg"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-3 my-4 w-full bg-[rgba(55,65,81,0.6)] rounded-lg"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-3 my-4 w-full bg-[rgba(55,65,81,0.6)] rounded-lg"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600 text-lg font-bold py-2 ">{errorMessage}</p>

        <button
          className="bg-red-600 p-3 my-4 w-full rounded-lg cursor-pointer"
          onClick={handleBtnClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign up'}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? 'New to Netflix? Sign Up Now.'
            : 'Already registered? Sign In Now.'}
        </p>
      </form>
    </div>
  );
};

export default Login;
