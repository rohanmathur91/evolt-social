import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const sideBarData = [
    { path: "/search", icon: "search", text: "Search" },
    { path: "/notifications", icon: "notifications", text: "Notification" },
    { path: "/", icon: "explore", text: "Explore" },
    { path: "/bookmark", icon: "bookmark_border", text: "Bookmarks" },
    { path: "/profile/1", icon: "perm_identity", text: "Profile" },
  ];

  return (
    <aside className="fixed bottom-3 mx-3 md:mx-0 rounded md:rounded-none left-0 right-0 md:sticky md:top-[10vh] md:bottom-0 md:right-auto md:left-aside md:border-r bg-white/80 backdrop-blur-sm">
      <ul className="w-full grid grid-cols-4 md:block md:mt-6 gap-1 md:gap-0">
        {sideBarData.map(({ icon, text, path }) => (
          <li
            key={icon}
            className={`${
              text === "Profile" ? "hidden md:block" : ""
            } flex-grow md:flex-grow-0 md:mb-1 md:mx-2 h-15`}
          >
            <NavLink
              to={path}
              title={text}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-slate-200" : ""
                } p-4 md:p-2 flex flex-col text-xs md:text-base md:flex-row justify-center md:justify-start items-center md:py-2 md:px-4 hover:bg-slate-200 rounded`
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
