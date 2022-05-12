import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { followUser, unfollowUser, useProfile } from "../../profile";
import { useAuth } from "../../auth";
import { getFollowingStatus } from "../utils";
import { CircularLoader } from "../../../common";

export const UserCard = ({
  _id,
  bio,
  firstName,
  lastName,
  username,
  profileUrl,
}) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { loggedInUserfollowing } = useProfile();
  const [isFollowLoader, setIsFollowLoader] = useState(false);
  const isFollowing = getFollowingStatus(loggedInUserfollowing, _id);

  const handleFollowClick = (userId) => {
    if (!isFollowing) {
      dispatch(followUser({ followUserId: userId, setIsFollowLoader }));
    } else {
      dispatch(unfollowUser({ followingUserId: userId, setIsFollowLoader }));
    }
  };

  return (
    <article className="p-2 pt-3 mb-4 rounded-lg shadow-md flex items-center border">
      <Link to={`/profile/${_id}`} className="flex items-center">
        {profileUrl ? (
          <img
            alt={username}
            loading="lazy"
            src={profileUrl}
            className="w-10 h-10 mr-4 object-cover flex-shrink-0 rounded-full bg-gray-200"
          />
        ) : (
          <div className="w-10 h-10 mr-4 text-lg flex flex-shrink-0 items-center justify-center font-semibold rounded-full bg-blue-500 text-white">
            {firstName[0].toUpperCase()}
          </div>
        )}

        <div>
          <p className="mr-1 text-sm sm:text-base font-semibold flex items-center line-clamp-1">
            {firstName} {lastName}
            <span className="hidden sm:inline text-gray-500 text-sm font-normal ml-2">
              @{username}
            </span>
          </p>
          <p className="text-sm text-gray-500 line-clamp-1">{bio}</p>
        </div>
      </Link>
      {username !== user.username && (
        <button
          disabled={isFollowLoader}
          onClick={() => handleFollowClick(_id)}
          className="btn btn-primary ml-auto relative self-start text-xs md:text-sm py-1 px-3"
        >
          {isFollowLoader && <CircularLoader size="1rem" position="center" />}
          <span className={isFollowLoader ? "invisible" : ""}>
            {isFollowing ? "Following" : "Follow"}
          </span>
        </button>
      )}
    </article>
  );
};

UserCard.defaultProps = {
  _id: "",
  bio: "",
  firstName: "",
  lastName: "",
  username: "",
  profileUrl: "",
};
