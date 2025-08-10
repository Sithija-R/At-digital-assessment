import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-xl text-gray-600 mt-2">Oops! Page not found.</p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-primary/80 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Notfound;
