import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/images/notFound.png";

export const NotFound = () => {
  return (
    <main className="mt-[10vh] px-2 min-h-[90vh] bg-white flex flex-col items-center justify-center">
      <img src={notFound} alt="notFound" className="w-1/2" />
      <h4 className="font-bold my-2">Oops 404, page not found.</h4>

      <Link to="/" className="text-blue-500 font-semibold flex items-center">
        <span class="material-icons-outlined mr-2 text-lg md:text-2xl">
          arrow_back
        </span>
        <span className="hover:underline">Go back home</span>
      </Link>
    </main>
  );
};
