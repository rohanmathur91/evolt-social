import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddPost, toggleTheme, useAuth } from "../../features";
import { useModal } from "../hooks";
import { Modal } from "./";
import { POSTMODAL } from "../helpers";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { user, theme } = useAuth();
  const { modalType, handleModalType } = useModal();
  const { firstName = "", profileImage } = user ?? {};

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    pathname !== "/login" &&
    pathname !== "/signup" && (
      <>
        {modalType === POSTMODAL && (
          <Modal handleModalType={handleModalType}>
            <AddPost handleModalType={handleModalType} />
          </Modal>
        )}

        <nav className="fixed top-0 left-0 right-0 w-full bg-white/60 dark:text-white border-b dark:border-b-gray-700 dark:bg-gray-900/80 backdrop-blur-sm z-[3]">
          <div className="max-container h-[4.2rem] flex flex-row items-center px-5">
            <Link
              to="/"
              className="text-2xl sm:text-3xl font-bold brand-name italic text-blue-500"
            >
              myspace
            </Link>

            <div className="ml-auto flex items-center">
              <button
                className="mr-4 tooltip"
                data-tooltip="Change theme"
                onClick={handleThemeToggle}
              >
                <span className="material-icons-outlined p-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700 text-blue-500">
                  {theme === "dark" ? "dark_mode" : "light_mode"}
                </span>
              </button>

              <Link
                data-tooltip="Profile"
                to={`profile/${user?._id}`}
                className="shrink-0 tooltip"
              >
                {profileImage ? (
                  <img
                    src={profileImage.url}
                    alt={profileImage.original_filename}
                    className="w-11 h-11 md:w-12 md:h-12 border object-contain rounded-full bg-gray-200"
                  />
                ) : (
                  <div className="w-11 h-11 md:w-12 md:h-12 text-xl flex items-center justify-center font-semibold rounded-full bg-blue-500 text-white">
                    {firstName[0]?.toUpperCase()}
                  </div>
                )}
              </Link>
            </div>
          </div>
        </nav>
      </>
    )
  );
};
