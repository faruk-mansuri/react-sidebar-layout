import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './components/home-layout';
import HomePage from './page/home';
import SettingsPage from './page/settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,

    children: [
      { index: true, element: <HomePage /> },

      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
