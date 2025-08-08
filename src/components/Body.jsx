import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import NowPlaying from './NowPlaying';
import AppLayout from './AppLayout';
import TopRated from './TopRated';
import UpComing from './UpComing';

const Body = () => {
 const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/browse', 
        element: <Browse /> 
      },
      { path: '/movies/now-playing', 
        element: <NowPlaying /> 
      },
       { path: '/movies/top-rated', 
        element: <TopRated /> 
      },
       { path: '/movies/upcoming', 
        element: <UpComing /> 
      },
      // Add more movie routes here
    ],
  },
]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
