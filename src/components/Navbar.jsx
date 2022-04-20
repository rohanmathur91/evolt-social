import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full border bg-white/80 backdrop-blur-sm z-[1]">
      <div className="max-container h-[10vh] flex flex-row items-center w-100 px-5">
        <Link to="/" className="text-3xl font-bold">
          Spaces
        </Link>
        <div className="ml-auto flex flex-row items-center w-100">
          <input
            type="text"
            placeholder="Search..."
            className="bg-slate-100 w-full md:w-96 rounded focus:outline focus:outline-slate-300"
          />
          <Link to="/profile/1" className="ml-6 shrink-0">
            <img
              alt="profile"
              src="https://i.pravatar.cc/300"
              className="w-12 h-12 rounded-full"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
