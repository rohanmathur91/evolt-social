import React from "react";
import { useLocation } from "react-router-dom";

export const TopContributors = () => {
  const { pathname } = useLocation();
  const isProfilePage = pathname.includes("/profile/");

  return (
    <aside
      className={`${
        isProfilePage ? "lg:hidden" : "lg:block"
      } hidden lg:right-aside border-l fixed right-0 w-[20rem] p-3`}
    >
      <h4 className="font-semibold mt-4 mb-2">Top Contributors</h4>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="p-2 pt-3 my-2 flex items-center border rounded"
        >
          <img
            alt="pravatar"
            loading="lazy"
            src="https://i.pravatar.cc/300"
            className="w-10 h-10 mr-4 shrink-0 object-cover rounded-full bg-gradient-to-b from-slate-200 to-slate-400"
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
        </div>
      ))}

      {/* map SuggestionCard */}
    </aside>
  );
};
