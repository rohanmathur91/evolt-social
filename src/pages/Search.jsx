import React from "react";

export const Search = () => {
  return (
    <main className="main p-3">
      <h4 className="font-semibold mt-4 mb-2">Search your friends.</h4>
      <input
        type="text"
        placeholder="Search..."
        className="bg-slate-100 focus:bg-slate-50 w-full rounded focus:outline focus:outline-slate-300"
      />
      <div className="mt-8 grid lg:auto-cols-fr">
        {[...Array(10)].map(() => (
          <div className="p-2 pt-3 my-2 lg:mr-1 flex items-center border rounded">
            <img
              alt="pravatar"
              loading="lazy"
              src="https://i.pravatar.cc/300"
              className="w-10 h-10 mr-4 object-cover rounded-full bg-gray-200"
            />

            <div className="leading-4">
              <p className="font-semibold line-clamp-1">
                Adarsh Balika
                <span className="text-gray-500 ml-1">@adarsh</span>
              </p>
              <p className="text-sm text-gray-500 line-clamp-1">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>

            <button className="ml-auto self-start text-xs md:text-sm bg-blue-500 text-white py-1 px-3 rounded hover:opacity-70">
              Follow
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};
