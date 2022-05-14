import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, NavLink, useParams } from "react-router-dom";
import { getUser, useProfile, followUser, unfollowUser } from "./profileSlice";
import { logoutUser, useAuth } from "../auth";
import {
  Modal,
  Sidebar,
  useModal,
  PROFILEMODAL,
  CircularLoader,
} from "../../common";
import { usePosts } from "../posts";
import { getFollowingStatus } from "../users";
import { EditProfileForm } from "./components";
import { getCurrentUserPosts } from "./utils";

export const Profile = () => {
  const { posts } = usePosts();
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { user: loggedInUser } = useAuth();
  const { modalType, handleModalType } = useModal();
  const { currentUser, loggedInUserfollowings, isUserLoading } = useProfile();
  const [isFollowLoader, setIsFollowLoader] = useState(false);
  const isFollowing = getFollowingStatus(loggedInUserfollowings, userId);
  const currentUserPosts = getCurrentUserPosts(userId, posts);
  const { _id, bio, websiteUrl, firstName, lastName, username, profileImage } =
    currentUser ?? {};

  useEffect(() => {
    dispatch(getUser(userId));
  }, [userId, loggedInUser, dispatch]);

  const handleFollowClick = () => {
    if (!isFollowing) {
      dispatch(
        followUser({
          followUserId: userId,
          setIsFollowLoader,
        })
      );
    } else {
      dispatch(
        unfollowUser({
          followingUserId: userId,
          setIsFollowLoader,
        })
      );
    }
  };

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
          {!currentUser || isUserLoading ? (
            <CircularLoader size="2rem" customStyle="mt-8 text-blue-500" />
          ) : (
            <>
              <div className="flex flex-col">
                <div className="flex items-center px-4 md:px-10">
                  {profileImage ? (
                    <img
                      loading="lazy"
                      src={profileImage.url}
                      alt={profileImage.original_filename}
                      className="mt-8 object-cover border-4 border-white w-28 h-28 md:w-36 md:h-36 bg-gray-200 rounded-full"
                    />
                  ) : (
                    <div className="mt-8 text-4xl md:text-6xl w-28 h-28 md:w-36 md:h-36 border-4 border-white flex items-center justify-center font-semibold rounded-full bg-blue-500 text-white">
                      {firstName[0].toUpperCase()}
                    </div>
                  )}

                  <div className="ml-auto mt-2 flex flex-col">
                    {userId === loggedInUser._id ? (
                      <button
                        onClick={() => handleModalType(PROFILEMODAL)}
                        className="btn btn-primary py-1 px-3 md:h-9 text-sm md:text-base"
                      >
                        Edit Profile
                      </button>
                    ) : (
                      <button
                        disabled={isFollowLoader}
                        onClick={handleFollowClick}
                        className={`${
                          isFollowLoader ? "relative" : ""
                        } btn btn-primary py-1 px-3 md:h-9 text-sm md:text-base`}
                      >
                        {isFollowLoader && (
                          <CircularLoader size="1rem" position="center" />
                        )}
                        <span className={isFollowLoader ? "invisible" : ""}>
                          {isFollowing ? "Following" : "Follow"}
                        </span>
                      </button>
                    )}

                    <button
                      onClick={handleLogout}
                      className="flex mt-2 md:h-9 items-center py-1 px-3 justify-center border border-red-400 text-red-500 rounded hover:bg-red-500 hover:text-white text-sm md:text-base hover:transition-all"
                    >
                      Logout
                      <span className="material-icons-outlined text-base ml-2">
                        logout
                      </span>
                    </button>
                  </div>
                </div>

                <div className="px-4 md:px-10 font-semibold mt-2">
                  <h3 className="text-lg md:text-2xl">
                    {firstName} {lastName}
                  </h3>
                  <span className="text-sm md:text-base text-gray-500">
                    @{username}
                  </span>
                </div>
                <div className="mt-2 mx-4 md:mx-10">
                  {bio && <p className="leading-tight text-sm mb-3">{bio}</p>}
                  {websiteUrl && (
                    <span className="flex items-center">
                      <span className="font-semibold text-sm mr-2">
                        Website:
                      </span>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={websiteUrl}
                        className="text-sm sm:text-sm text-blue-500 font-semibold hover:underline line-clamp-1"
                      >
                        {websiteUrl}
                      </a>
                    </span>
                  )}

                  <div className="mt-3 mb-4">
                    <Link to={`/profile/${_id}`}>
                      <span className="font-semibold">
                        {currentUserPosts.length || 0}
                      </span>
                      <span className="ml-2 text-sm hover:underline">
                        Posts
                      </span>
                    </Link>
                    <Link to={`/profile/${_id}/followers`} className="ml-4">
                      <span className="font-semibold">
                        {currentUser.followers.length || 0}
                      </span>
                      <span className="ml-2 text-sm hover:underline">
                        Followers
                      </span>
                    </Link>
                    <Link to={`/profile/${_id}/following`} className="ml-4">
                      <span className="font-semibold">
                        {currentUser.following.length || 0}
                      </span>
                      <span className="ml-2 text-sm hover:underline">
                        Following
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="max-w-xl mx-auto mt-4 pb-32">
                <div className="border-b flex items-center justify-between">
                  <NavLink
                    end
                    to={`/profile/${_id}`}
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
                    to={`/profile/${_id}/followers`}
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
                    to={`/profile/${_id}/following`}
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
            </>
          )}
        </main>
      </div>
    </>
  );
};
