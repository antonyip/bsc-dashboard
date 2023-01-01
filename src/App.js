import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage'
import RootPage from './pages/RootPage'
import Index from './pages/Index'
import Blockchain from './pages/Blockchain'
import Speed from './pages/Speed'
import Users from './pages/Users'
import AboutPage from './pages/AboutPage'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: 'Speed/',
          element: <Speed />,
        },
        {
          path: 'Users/',
          element: <Users />,
        },
        {
          path: 'Fees/',
          element: <Blockchain />,
        },
        {
          path: 'About/',
          element: <AboutPage />,
        },
      ],
    },

  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

