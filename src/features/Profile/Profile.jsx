import React, { useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { Modal, Sidebar, useModal } from "../../common";

export const Profile = () => {
  const { showModal, handleShowModal } = useModal();
  const [profileImage, setProfileImage] = useState(null);

  const handleProfileImageChange = (e) => {
    console.log(profileImage);
    setProfileImage(e.target.files[0]);
  };

  return (
    <>
      {showModal && (
        <Modal handleShowModal={handleShowModal}>
          <form className="bg-white flex flex-col p-4 rounded relative">
            <div className="absolute right-0 top-0">
              <button
                type="button"
                data-tooltip="Close"
                onClick={() => handleShowModal(false)}
                className="tooltip p-2 m-2 flex rounded items-center justify-center hover:bg-blue-100 hover:text-blue-500"
              >
                <span className="material-icons-outlined">close</span>
              </button>
            </div>

            <div className="flex flex-row items-center mb-4">
              <span>Profile image: </span>
              <div className="ml-4 relative rounded-full border">
                <img
                  alt="profile"
                  loading="lazy"
                  src="https://i.pravatar.cc/300"
                  className="w-10 h-10 sm:w-14 sm:h-14 bg-gray-200 rounded-full"
                />

                <div className="flex items-center justify-center absolute right-[-4px] bottom-[-7px] text-blue-500 w-6 h-6 sm:w-8 sm:h-8 border border-blue-500 rounded-full bg-blue-100">
                  <label
                    htmlFor="image-upload"
                    data-tooltip="Add profile image"
                    className="tooltip hover:cursor-pointer flex items-center justify-center"
                  >
                    <span className="material-icons-outlined text-sm sm:text-base">
                      add_a_photo
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      id="image-upload"
                      className="invisible w-0 p-0"
                      onChange={handleProfileImageChange}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-row mb-4">
              <span>Name:</span>
              <span className="ml-4 font-semibold">Adarsh Balika</span>
            </div>

            <div className="flex flex-row mb-4">
              <span>Username:</span>
              <span className="ml-4 font-semibold">@adarshBalika</span>
            </div>

            <label>
              Website link:
              <input
                type="text"
                placeholder="Link..."
                className="border border-slate-300 rounded w-full focus:border focus:border-blue-500"
              />
            </label>

            <label className="mt-4">
              Bio:
              <textarea
                type="text"
                maxLength="80"
                placeholder="Bio..."
                className="border border-slate-300 rounded w-full py-2 px-4 outline-none focus:border focus:border-blue-500"
              />
            </label>

            <button className="btn btn-primary mt-2 self-end py-2 px-4 text-sm sm:text-base">
              Update
            </button>
          </form>
        </Modal>
      )}

      <div className="grid-container">
        <Sidebar />
        <main className="main bg-white mt-[10vh] min-h-[90vh] md:col-start-2 md:col-end-[-1]">
          <div className="flex flex-col pt-6 mb-10">
            <div className="flex flex-row items-center justify-center p-2 mb-2">
              <img
                alt="profile"
                loading="lazy"
                src="https://i.pravatar.cc/300"
                className="w-28 h-28 md:w-36 md:h-36 bg-gray-200 rounded-full border"
              />
              <div className="ml-4">
                <div className="flex flex-row items-center flex-wrap">
                  <span className="text-xl md:text-2xl font-semibold mr-4">
                    adarshBalika
                  </span>

                  <div className="mt-2 md:mt-0 flex flex-row items-center">
                    <button
                      onClick={() => handleShowModal(true)}
                      className="mr-4 rounded text-sm border border-blue-500 text-blue-500 py-1 px-3 hover:transition-all hover:text-white hover:bg-blue-500"
                    >
                      Edit Profile
                    </button>
                    <button
                      data-tooltip="Logout"
                      className="flex tooltip flex-row items-center justify-center"
                    >
                      <span className="material-icons-outlined md:text-3xl">
                        logout
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-row my-4">
                  <Link
                    to="/profile/1"
                    className="mr-4 text-xs sm:text-sm flex flex-col items-center justify-center"
                  >
                    <span className="font-semibold mr-1">10</span>{" "}
                    <span>Posts</span>
                  </Link>
                  <Link
                    to="/profile/1/followers"
                    className="mr-4 text-xs sm:text-sm flex flex-col items-center justify-center"
                  >
                    <span className="font-semibold mr-1">20</span>
                    <span>Followers</span>
                  </Link>
                  <Link
                    to="/profile/1/following"
                    className="mr-4 text-xs sm:text-sm flex flex-col items-center justify-center"
                  >
                    <span className="font-semibold mr-1">12</span>
                    <span>Following</span>
                  </Link>
                </div>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://google.com`}
                  className="text-sm sm:text-sm text-blue-500 font-semibold hover:underline line-clamp-1 pr-4"
                >
                  https://google.com
                </a>
              </div>
            </div>
            <p className="mx-4 font-semibold text-sm text-center sm:text-sm line-clamp-1">
              Utilities for controlling the color of an element's borders.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="border-t flex items-center justify-between">
              <NavLink
                end
                to="/profile/1"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-500 border-t border-blue-500" : ""
                  } font-semibold text-sm md:text-base py-2 px-4`
                }
              >
                Posts
              </NavLink>
              <NavLink
                end
                to="/profile/1/followers"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-500 border-t border-blue-500" : ""
                  } font-semibold text-sm md:text-base py-2 px-4`
                }
              >
                Followers
              </NavLink>
              <NavLink
                end
                to="/profile/1/following"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-500 border-t border-blue-500" : ""
                  } font-semibold text-sm md:text-base py-2 px-4`
                }
              >
                Following
              </NavLink>
            </div>

            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};
