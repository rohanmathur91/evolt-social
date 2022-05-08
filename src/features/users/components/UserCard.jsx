import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { followUser, unfollowUser, useProfile } from "../../profile";
import { useAuth } from "../../auth";
import { getFollowingStatus } from "../utils";

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
  const { following } = useProfile();
  const [isFollowLoader, setIsFollowLoader] = useState(false);
  const isFollowing = getFollowingStatus(following, _id);

  const handleFollowClick = (followUserId) => {
    if (!isFollowing) {
      dispatch(followUser({ followUserId, setIsFollowLoader }));
    } else {
      dispatch(unfollowUser({ followUserId, setIsFollowLoader }));
    }
  };

  return (
    <article className="p-2 pt-3 my-2 lg:mr-1 rounded-lg flex items-center border">
      <Link to={`/profile/${_id}`} className="flex items-center">
        {profileUrl ? (
          <img
            alt={username}
            loading="lazy"
            src={profileUrl}
            className="w-10 h-10 mr-4 object-cover flex-shrink-0 rounded-full bg-gray-200"
          />
        ) : (
          <div className="w-10 h-10 mr-4 text-lg flex flex-shrink-0 items-center justify-center font-semibold object-cover rounded-full bg-blue-500 text-white">
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
          className="ml-auto self-start text-xs md:text-sm bg-blue-500 text-white py-1 px-3 rounded hover:opacity-70"
        >
          {isFollowLoader ? "Loading..." : isFollowing ? "Following" : "Follow"}
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
