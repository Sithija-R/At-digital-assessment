import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col  gap-2 items-center">
      <p className="text-2xl">This page is under maintenance.</p>
      <Link
        to="/"
        className="mt-4 px-6 w-40 py-2 bg-primary text-white rounded hover:bg-primary/80 transition text-center"
      >
        Go Home
      </Link>
    </div>
  </div>
  );
};

export default Contact;
