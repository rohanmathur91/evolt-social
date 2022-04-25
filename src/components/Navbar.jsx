import React from "react";
import { Link } from "react-router-dom";
import { useModal } from "../hooks";
import { Modal, AddPost } from "./";

export const Navbar = () => {
  const { showModal, handleShowModal } = useModal();

  return (
    <>
      {showModal && (
        <Modal handleShowModal={handleShowModal}>
          <AddPost handleShowModal={handleShowModal} />
        </Modal>
      )}

      <nav className="fixed top-0 left-0 right-0 w-full border bg-white/80 backdrop-blur-sm z-[1]">
        <div className="max-container h-[10vh] flex flex-row items-center w-100 px-5">
          <Link to="/" className="text-3xl font-bold">
            Spaces
          </Link>
          <div className="ml-auto flex flex-row items-center w-100">
            <button title="Add post" onClick={() => handleShowModal(true)}>
              <span className="material-icons-outlined md:text-3xl w-11 h-11 flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100/80">
                add_box
              </span>
            </button>

            <Link to="/profile/1" className="ml-4 shrink-0">
              <img
                alt="profile"
                loading="lazy"
                src="https://i.pravatar.cc/300"
                className="w-11 h-11 rounded-full bg-gradient-to-b from-slate-200 to-slate-400"
              />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
