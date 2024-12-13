import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import MainLayout from '../layout.jsx/MainLayout';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import JobDetails from '../pages/JobDetails';
import PrivateRoute from './PrivateRoute';
import JobsApply from '../pages/JobsApply';
import MyApplications from '../pages/MyApplications';
import Addjob from '../pages/Addjob';
import MypostedJob from '../pages/MypostedJob';
import ViewApplication from '../pages/ViewApplication';

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
          path: '/jobs/:id',
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: '/JobApply/:id',
          element: <PrivateRoute><JobsApply></JobsApply></PrivateRoute>
        },
        {
          path: '/myApplications',
          element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
          path: '/addjob',
          element: <PrivateRoute><Addjob></Addjob></PrivateRoute>
        },
        {
          path: '/myPostedJobs',
          element: <PrivateRoute><MypostedJob></MypostedJob></PrivateRoute>
        },
        {
          path: 'viewApplications/:job_id',
          element: <PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/job-application/jobs/${params.job_id}`)
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