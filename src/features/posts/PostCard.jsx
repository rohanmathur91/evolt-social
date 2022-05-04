import React from "react";
import { getDate } from "./utils";

export const PostCard = ({
  _id,
  likes,
  imageUrl,
  profileUrl,
  content,
  username,
  firstName,
  lastName,
  updatedAt,
}) => {
  return (
    <article
      key={_id}
      className="border rounded-lg mb-4 max-w-xl mx-auto shadow bg-white"
    >
      <section className="p-2 pl-4 pt-4 flex items-center">
        {profileUrl ? (
          <img
            alt={username}
            loading="lazy"
            src={profileUrl}
            className="w-11 h-11 md:w-12 md:h-12 mr-4 object-cover rounded-full bg-gray-200"
          />
        ) : (
          <div className="h-11 min-w-[2.75rem] md:w-12 md:h-12 mr-4 flex items-center justify-center font-semibold object-cover rounded-full bg-blue-500 text-white">
            {firstName[0] + lastName[0]}
          </div>
        )}

        <div>
          <span className="font-semibold line-clamp-1">
            {firstName} {lastName}
          </span>
          <p className="text-gray-500 text-sm font-normal flex items-center line-clamp-1">
            @{username}
            <span className="mx-1 font-semibold">.</span>
            {getDate(updatedAt)}
          </p>
        </div>

        <button
          data-tooltip="More"
          className="tooltip mx-2 w-10 h-10 ml-auto flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100"
        >
          <span className="material-icons-outlined text-2xl">more_horiz</span>
        </button>
      </section>

      {imageUrl && (
        <img
          alt={username}
          loading="lazy"
          src={imageUrl}
          className="w-full h-[50vh] aspect-[2/1] bg-gray-200"
        />
      )}

      <p className="py-2 px-5 text-sm lg:text-base">{content}</p>
      <section className="flex flex-row items-center justify-between mt-2 mb-3 mx-5">
        <div className="flex text-gray-900">
          <button
            data-tooltip="Like"
            className="tooltip w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100"
          >
            <span className="material-icons-outlined text-xl">thumb_up</span>
            <span>{likes.likeCount}</span>
          </button>

          <button
            data-tooltip="Comment"
            className="tooltip mx-2 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100"
          >
            <span className="material-icons-outlined text-xl">comment</span>
          </button>
        </div>

        <button
          data-tooltip="Bookmark"
          className="tooltip w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100"
        >
          <span className="material-icons-outlined text-xl">
            bookmark_border
          </span>
        </button>
      </section>
    </article>
  );
};

PostCard.defaultProps = {
  _id: "",
  likes: null,
  imageUrl: "",
  profileUrl: "",
  content: "",
  username: "",
  firstName: "",
  lastName: "",
  updatedAt: "",
};
