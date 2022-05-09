import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, NavLink } from "react-router-dom";
import { useProfile, getCurrentUserPosts } from "./profileSlice";
import { usePosts } from "../posts";
import { logoutUser, useAuth } from "../auth";
import { Modal, Sidebar, useModal, PROFILEMODAL } from "../../common";
import { EditProfileForm } from "./components";

export const Profile = () => {
  const { user } = useAuth();
  const { bookmarks } = usePosts();
  const { isLoading } = useProfile();
  const { modalType, handleModalType } = useModal();
  const dispatch = useDispatch();
  const { _id, bio, firstName, lastName, username, profileUrl } = user;

  useEffect(() => {
    dispatch(getCurrentUserPosts(username));
    console.log("running");
  }, [dispatch, username]);

  const handleLogout = () => dispatch(logoutUser());

  return (
    <>
      {modalType === PROFILEMODAL && (
        <Modal handleModalType={handleModalType}>
          <EditProfileForm handleModalType={handleModalType} />
        </Modal>
      )}

      <div className="grid-container">
        <Sidebar />
        <main className="main bg-white rounded-lg md:col-start-2 md:col-end-[-1]">
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
                      onClick={() => handleModalType(PROFILEMODAL)}
                      className="mr-4 rounded text-sm border border-blue-500 text-blue-500 py-1 px-3 hover:transition-all hover:text-white hover:bg-blue-500"
                    >
                      Edit Profile
                    </button>
                    <button
                      data-tooltip="Logout"
                      onClick={handleLogout}
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
