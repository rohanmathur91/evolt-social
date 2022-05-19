import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAuth, logoutUser } from "../../features";
import { POSTMODAL, sideBarData } from "../helpers";
import { useModal } from "../hooks";

export const Sidebar = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { handleModalType } = useModal();

  const handleLogout = () => dispatch(logoutUser());

  return (
    <aside className="sticky bottom-0 left-0 right-0 z-[2] md:top-[6.2rem] md:left-aside md:ml-auto md:w-[16rem] md:py-2 md:h-[80vh] md:rounded-lg md:border dark:border-gray-700 bg-white shadow-md md:shadow-none dark:bg-gray-900 border-t rounded-none  backdrop-blur-sm">
      <ul className="w-full grid grid-cols-5 md:block gap-1 md:gap-0">
        {sideBarData.map(({ icon, type, text, path }) => (
          <li
            key={icon}
            className={`${
              text === "Profile"
                ? "hidden md:block"
                : type === "button"
                ? "block md:hidden"
                : ""
            } md:mb-1 md:mx-2 hover:transition-all`}
          >
            {type === "button" ? (
              <button
                title="Add post"
                onClick={() => handleModalType(POSTMODAL)}
                className="p-3 md:py-2 md:px-4 flex flex-col text-xs md:text-base md:flex-row justify-center md:justify-start items-center hover:text-blue-500 hover:bg-blue-100 rounded w-full"
              >
                <span className="material-icons-outlined text-2xl md:mr-3 md:text-3xl">
                  {icon}
                </span>
                <span className="hidden sm:block">{text}</span>
              </button>
            ) : (
              <NavLink
                title={text}
                to={text === "Profile" ? `/profile/${user?._id}` : path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-blue-100/70 text-blue-500 dark:bg-gray-800"
                      : ""
                  } p-3 md:py-2 md:px-4 flex flex-col text-xs md:text-base md:flex-row justify-center md:justify-start items-center hover:text-blue-500 hover:bg-blue-100 rounded dark:hover:bg-gray-800`
                }
              >
                <span className="material-icons-outlined text-2xl md:mr-3 md:text-3xl">
                  {icon}
                </span>
                <span className="hidden sm:block">{text}</span>
              </NavLink>
            )}
          </li>
        ))}
        <li key="add-post-btn" className="mt-2 hidden md:block mx-2">
          <button
            title="Add post"
            onClick={() => handleModalType(POSTMODAL)}
            className="w-full btn btn-primary py-2 px-4 text-base rounded"
          >
            Add post
          </button>
        </li>
        <li key="logout-btn" className="hidden mt-36 md:block mx-2">
          <button
            title="Logout"
            onClick={handleLogout}
            className="w-full flex items-center justify-center py-2 px-4 border border-red-400 text-red-500 rounded hover:bg-red-500 hover:text-white dark:text-red-400 dark:hover:text-white text-sm md:text-base hover:transition-all"
          >
            Logout
            <span className="material-icons-outlined text-base ml-2">
              logout
            </span>
          </button>
        </li>
      </ul>
    </aside>
  );
};
