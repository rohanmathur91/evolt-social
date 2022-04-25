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
          <button title="Add post">
            <span className="material-icons-outlined text-3xl w-11 h-11 flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100">
              add_box
            </span>
          </button>

          <Link to="/profile/1" className="ml-4 shrink-0">
            <img
              alt="profile"
              src="https://i.pravatar.cc/300"
              className="w-11 h-11 rounded-full"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
