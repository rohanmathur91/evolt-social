import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AddPost, useAuth } from "../../features";
import { useModal } from "../hooks";
import { Modal } from "./";
import { POSTMODAL } from "../helpers";

export const Navbar = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const { modalType, handleModalType } = useModal();
  const { firstName = "", profileImage } = user ?? {};

  return (
    pathname !== "/login" &&
    pathname !== "/signup" && (
      <>
        {modalType === POSTMODAL && (
          <Modal handleModalType={handleModalType}>
            <AddPost handleModalType={handleModalType} />
          </Modal>
        )}

        <nav className="fixed top-0 left-0 right-0 w-full border bg-white/80 backdrop-blur-sm z-[3]">
          <div className="max-container h-[10vh] flex flex-row items-center px-5">
            <Link
              to="/"
              className="text-2xl sm:text-3xl font-bold brand-name italic text-blue-500"
            >
              myspace
            </Link>

            <Link
              data-tooltip="Profile"
              to={`profile/${user?._id}`}
              className="ml-auto shrink-0 tooltip"
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
        </nav>
      </>
    )
  );
};
