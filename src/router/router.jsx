import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import MainLayout from '../layout.jsx/MainLayout';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Route not found</h2>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
         {
          path: '/register',
          element: <Register></Register>
         },
         {
          path: '/signin',
          element: <SignIn></SignIn>
         } 
      ]
    },
  ]);

export default router;