// src/components/NotFound.js
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="relative">
        <div className="ghost-container flex justify-center">
          <div className="ghost relative w-40 h-40 bg-white rounded-full shadow-lg overflow-hidden">
            <div className="ghost-eyes absolute top-1/3 left-1/4 flex space-x-8">
              <div className="eye w-6 h-6 bg-black rounded-full"></div>
              <div className="eye w-6 h-6 bg-black rounded-full"></div>
            </div>
            <div className="ghost-body absolute bottom-0 left-0 w-full h-1/3 bg-white rounded-b-full wave-animation"></div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <h1 className="text-white text-6xl font-bold animate-pulse">404</h1>
        <p className="text-white text-xl mt-4">Oops! Page not found.</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-200 transition duration-300 ease-in-out">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
