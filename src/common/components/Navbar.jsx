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
          <div className="max-container h-[10vh] flex flex-row items-center w-100 px-5">
            <Link
              to="/"
              className="text-2xl sm:text-3xl font-bold brand-name italic text-blue-500"
            >
              myspace
            </Link>
            <div className="ml-auto flex flex-row items-center w-100">
              <button
                data-tooltip="Add post"
                onClick={() => handleModalType(POSTMODAL)}
                className="tooltip w-11 h-11 flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100/80"
              >
                <span className="material-icons-outlined md:text-3xl">
                  add_box
                </span>
              </button>

              <Link to={`profile/${user?._id}`} className="ml-4 shrink-0">
                <img
                  alt="profile"
                  loading="lazy"
                  src="https://i.pravatar.cc/300"
                  className="w-11 h-11 border rounded-full bg-gray-200"
                />
              </Link>
            </div>
          </div>
        </nav>
      </>
    )
  );
};
