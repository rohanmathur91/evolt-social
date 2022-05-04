import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useModal } from "../hooks";
import { Modal, AddPost } from "./";

export const Navbar = () => {
  const { pathname } = useLocation();
  const { showModal, handleShowModal } = useModal();

  return (
    pathname !== "/login" &&
    pathname !== "/signup" && (
      <>
        {showModal && (
          <Modal handleShowModal={handleShowModal}>
            <AddPost handleShowModal={handleShowModal} />
          </Modal>
        )}

        <nav className="fixed top-0 left-0 right-0 w-full border bg-white/80 backdrop-blur-sm z-[1]">
          <div className="max-container h-[10vh] flex flex-row items-center w-100 px-5">
            <Link
              to="/"
              className="text-2xl sm:text-3xl font-bold brand-name italic text-blue-500"
            >
              myspace
            </Link>
            <div className="ml-auto flex flex-row items-center w-100">
              <button
                className="tooltip"
                data-tooltip="Add post"
                onClick={() => handleShowModal(true)}
              >
                <span className="material-icons-outlined md:text-3xl w-11 h-11 flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100/80">
                  add_box
                </span>
              </button>

              <Link to="/profile/1" className="ml-4 shrink-0">
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
