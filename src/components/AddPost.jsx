import React, { useState } from "react";
import { emojis } from "../data";

export const AddPost = () => {
  const [postImage, setPostImage] = useState(null);
  const [postContent, setPostContent] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleImageFileChange = (e) => {
    setPostImage(e.target.files[0]);
  };

  const handleContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleShowEmoji = () => {
    setShowEmojis((prev) => !prev);
  };

  const handleEmojiClick = (emoji) => {
    setPostContent((prev) => prev + emoji);
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        onClick={(e) => e.stopPropagation()}
        className="m-4 max-w-xl w-full relative bg-white border py-2 px-3 rounded"
      >
        <textarea
          required
          maxLength="120"
          value={postContent}
          onChange={handleContentChange}
          placeholder="What's on your mind?"
          className="w-full h-36 p-3 resize-none rounded border focus:outline-2 focus:outline-blue-500"
        ></textarea>

        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center">
            <button
              type="button"
              onClick={handleShowEmoji}
              className="mr-2 w-10 h-10 rounded-full hover:cursor-pointer text-2xl text-blue-500 hover:bg-blue-100"
            >
              <span className="material-icons-outlined flex items-center justify-center">
                add_reaction
              </span>
            </button>

            <label htmlFor="image-upload" className="flex items-center">
              <span className="material-icons-outlined w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer text-2xl text-blue-500 hover:bg-blue-100">
                add_photo_alternate
              </span>
              <input
                type="file"
                accept="image/*"
                id="image-upload"
                className="invisible w-0 p-0"
                onChange={handleImageFileChange}
              />

              <span className="text-xs text-gray-500 max-w-[8ch] line-clamp-1">
                {postImage?.name}
              </span>
            </label>
          </div>

          {postContent.length === 120 ? (
            <span className="text-xs font-semibold text-blue-500 ml-1">
              (Max limit reached)
            </span>
          ) : (
            <span className="text-xs md:text-sm text-gray-500 font-semibold mx-1">
              Character count: {postContent.length}
            </span>
          )}

          <div className="ml-auto md:ml-1 mt-1 md:mt-0">
            <button className="rounded text-sm md:text-base border mr-2 border-blue-500 text-blue-500 py-1 px-3 hover:transition-all hover:text-white hover:bg-blue-500">
              Cancel
            </button>

            <button
              disabled={postContent.length === 0 || postContent.length > 120}
              className={`btn btn-primary text-sm md:text-base py-1 px-3 hover:transition-all ${
                postContent.length === 0 ? "opacity-70" : ""
              }`}
            >
              Add post
            </button>
          </div>
        </div>

        {showEmojis && (
          <div
            className="absolute left-0 bottom-[-140px] p-2 flex flex-row items-center justify-center flex-wrap max-w-xs rounded bg-white border"
            onClick={(e) => e.stopPropagation()}
          >
            {emojis.map((emoji, index) => (
              <button
                className="m-1 w-7 h-7 flex flex-row items-center justify-center hover:bg-slate-200 rounded p-1"
                onClick={() => handleEmojiClick(emoji)}
                key={index}
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
      </form>
    </>
  );
};
