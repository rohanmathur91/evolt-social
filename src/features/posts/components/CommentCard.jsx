import React from "react";
import { getDate } from "../utils";

export const CommentCard = ({
  comment,
  username,
  firstName,
  lastName,
  createdAt,
  profileImage,
}) => {
  return (
    <article className="flex bg-white p-2 rounded-lg border mb-4 shadow">
      {profileImage ? (
        <img
          loading="lazy"
          src={profileImage.url}
          alt={profileImage.original_filename}
          className="w-10 h-10 mr-4 object-cover flex-shrink-0 rounded-full bg-gray-200"
        />
      ) : (
        <div className="w-10 h-10 mr-4 text-lg flex flex-shrink-0 items-center justify-center font-semibold rounded-full bg-blue-500 text-white">
          {firstName[0].toUpperCase()}
        </div>
      )}

      <div className="flex flex-col">
        <p className="text-gray-500 text-sm font-normal flex items-center line-clamp-1">
          <span className="font-semibold text-neutral-900 mr-1">
            {firstName} {lastName}
          </span>
          <span className="mx-1 font-semibold">•</span>
          {getDate(createdAt)}
        </p>
        <p className="text-sm break-normal">{comment}</p>
      </div>
    </article>
  );
};

CommentCard.defaultProps = {
  comment: "",
  username: "",
  firstName: "",
  lastName: "",
  createdAt: "",
  profileImage: null,
};
