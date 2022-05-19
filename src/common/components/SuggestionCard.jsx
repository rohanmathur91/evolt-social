import React from "react";
import { Link } from "react-router-dom";

export const SuggestionCard = ({
  _id,
  firstName,
  lastName,
  username,
  profileImage,
}) => {
  return (
    <Link
      title={`@${username}`}
      to={`/profile/${_id}`}
      className="flex items-center p-2 pt-3 mb-4 rounded-lg shadow border dark:bg-gray-800 dark:border-gray-700"
    >
      {profileImage ? (
        <img
          loading="lazy"
          src={profileImage.url}
          alt={profileImage.original_filename}
          className="w-10 h-10 mr-4 object-cover rounded-full flex-shrink-0 bg-gray-200"
        />
      ) : (
        <div className="w-10 h-10 mr-4 text-lg flex items-center flex-shrink-0 justify-center font-semibold rounded-full bg-blue-500 text-white">
          {firstName[0].toUpperCase()}
        </div>
      )}

      <div className="text-sm flex flex-col sm:text-base font-semibold">
        <span>
          {firstName} {lastName}
        </span>
        <span className="hidden sm:inline text-gray-500 dark:text-gray-400 text-sm font-normal">
          @{username}
        </span>
      </div>

      <span className="material-icons-round ml-auto text-blue-500 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-700">
        add
      </span>
    </Link>
  );
};

SuggestionCard.defaultProps = {
  _id: "",
  firstName: "",
  lastName: "",
  username: "",
  profileImage: null,
};
