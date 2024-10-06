import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layouts/Main/Main.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import AppliedJobs from './Pages/Home/AppliedJobs/AppliedJobs.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import JobDetails from './Pages/JobDetails/JobDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("jobs.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-screen-xl	mx-auto">

    <RouterProvider router={router} />
    </div>
  </StrictMode>
);
