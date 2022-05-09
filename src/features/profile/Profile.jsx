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
  const { isLoading, followers, following } = useProfile();
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
        <main className="main bg-white pb-20 rounded-lg md:col-start-2 md:col-end-[-1]">
          <div className="flex flex-col mb-10">
            <div className="bg-gray-200 h-60 md:rounded-lg"></div>
            <div className="flex items-center px-4 md:px-10">
              <img
                alt="profile"
                loading="lazy"
                src="https://i.pravatar.cc/300"
                className="-mt-16 md:mt-[-74px] border-4 border-white w-28 h-28 md:w-36 md:h-36 bg-gray-200 rounded-full"
              />

              <div className="ml-auto mt-2 flex flex-col">
                <button
                  onClick={() => handleModalType(PROFILEMODAL)}
                  className="rounded md:h-9 text-sm md:text-base border border-blue-500 text-blue-500 py-1 px-3 hover:text-white hover:bg-blue-500"
                >
                  Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="flex mt-2 md:h-9 items-center py-1 px-3 justify-center hover:bg-red-100 hover:text-red-500 rounded bg-red-500 text-white text-sm md:text-base"
                >
                  Logout
                  <span className="material-icons-outlined text-base ml-2">
                    logout
                  </span>
                </button>
              </div>
            </div>

            <div className="px-4 md:px-10 font-semibold">
              <h3 className="text-lg md:text-2xl">
                {firstName} {lastName}
              </h3>
              <span className="text-sm md:text-base text-gray-500">
                @{username}
              </span>
            </div>
            <div className="mt-2 mx-4 md:mx-10">
              <p className="text-sm md:text-base">{bio}</p>
              <div className="mt-4">
                <Link to={`/profile/${username}/followers`}>
                  <span className="font-semibold">{followers.length}</span>
                  <span className="ml-2 text-sm hover:underline">
                    Followers
                  </span>
                </Link>
                <Link to={`/profile/${username}/following`} className="ml-4">
                  <span className="font-semibold">{following.length}</span>
                  <span className="ml-2 text-sm hover:underline">
                    Following
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="border-b flex items-center justify-between">
              <NavLink
                end
                to={`/profile/${username}`}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-blue-500 border-b-2 mb-[-0.8px] border-blue-500"
                      : ""
                  } font-semibold text-sm md:text-base py-2 px-4 hover:text-blue-500`
                }
              >
                Posts
              </NavLink>
              <NavLink
                end
                to="/profile/1/followers"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-blue-500 border-b-2 mb-[-0.8px] border-blue-500"
                      : ""
                  } font-semibold text-sm md:text-base py-2 px-4 hover:text-blue-500`
                }
              >
                Followers
              </NavLink>
              <NavLink
                end
                to="/profile/1/following"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-blue-500 border-b-2 mb-[-0.8px] border-blue-500"
                      : ""
                  } font-semibold text-sm md:text-base py-2 px-4 hover:text-blue-500`
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
