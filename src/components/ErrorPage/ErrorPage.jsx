import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl">Oops!!</h1>
        <p className="text-red-600 text-3xl">
          {error.statusText || error.message}
        </p>
        <Link to='/'>
          <button className='btn btn-outline border-0 border-b-4 text-2xl text-green-700'>Go Back to Home page</button>
        </Link>
      </div>
    );
};

export default ErrorPage;