import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const sideBarData = [
    { path: "/", icon: "home", text: "Feed" },
    { path: "/search", icon: "search", text: "Search" },
    { path: "/explore", icon: "explore", text: "Explore" },
    { path: "/notifications", icon: "notifications", text: "Notification" },
    { path: "/bookmarks", icon: "bookmark_border", text: "Bookmarks" },
    { path: "/profile/1", icon: "perm_identity", text: "Profile" },
  ];

  return (
    <aside className="md:left-aside z-[2] md:ml-auto sticky bottom-3 left-0 right-0 md:top-[15vh] md:w-[16rem] mx-3 md:mx-0 md:py-2 md:h-[80vh] rounded md:rounded-lg md:border bg-white/60 backdrop-blur-sm">
      <ul className="w-full grid grid-cols-5 md:block gap-1 md:gap-0">
        {sideBarData.map(({ icon, text, path }) => (
          <li
            key={icon}
            className={`${
              text === "Profile" ? "hidden md:block" : ""
            } flex-grow md:flex-grow-0 md:mb-1 md:mx-2 h-15 hover:transition-all`}
          >
            <NavLink
              to={path}
              title={text}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-blue-100/70 text-blue-500" : ""
                } p-3 md:p-2 flex flex-col text-xs md:text-base md:flex-row justify-center md:justify-start items-center md:py-2 md:px-4 hover:bg-blue-100 rounded`
              }
            >
              <span className="material-icons-outlined text-2xl md:mr-3 md:text-3xl">
                {icon}
              </span>
              <span className="hidden sm:block">{text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
