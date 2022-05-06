import React, { useEffect, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, editPost, usePosts } from "./postSlice";
import { useAuth } from "../auth";
import { emojis, postLimit } from "./data";

export const AddPost = ({ handleShowModal }) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { isLoading } = usePosts();
  const { isEditMode, currentEditPost } = usePosts();
  const [postImage, setPostImage] = useState("");
  const [postContent, setPostContent] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  console.log(isEditMode);

  useEffect(() => {
    if (currentEditPost) {
      setPostImage(currentEditPost.imageUrl);
      setPostContent(currentEditPost.content);
    }
  }, [currentEditPost]);

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
    setPostContent((prev) => (prev.length < postLimit ? prev + emoji : prev));
  };

  const handleTextAreaFocus = useCallback((node) => {
    if (node) {
      node.focus();
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = user;

    const postData = {
      lastName,
      firstName,
      imageUrl: postImage,
      content: postContent,
    };

    if (!isEditMode) {
      dispatch(addPost(postData));
    } else {
      dispatch(editPost({ ...currentEditPost, ...postData }));
    }
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="max-w-xl w-full relative bg-white border p-3 rounded-lg"
      >
        <textarea
          required
          maxLength={postLimit}
          value={postContent}
          ref={handleTextAreaFocus}
          onChange={handleContentChange}
          placeholder="What's on your mind?"
          className="w-full h-36 p-3 resize-none rounded border focus:outline-2 focus:outline-blue-500"
        ></textarea>

        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center">
            <button
              type="button"
              data-tooltip="Add emoji"
              onClick={handleShowEmoji}
              className="tooltip mr-2 w-10 h-10 rounded-full hover:cursor-pointer text-2xl text-blue-500 hover:bg-blue-100"
            >
              <span className="material-icons-outlined flex items-center justify-center">
                add_reaction
              </span>
            </button>

            <label
              htmlFor="image-upload"
              data-tooltip="Add image"
              className="tooltip flex items-center"
            >
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

          <span
            className={`${
              postContent.length === postLimit
                ? "text-blue-500"
                : "text-gray-500"
            } text-xs text-center self-center w-[5rem] md:text-sm font-semibold mx-1`}
          >
            {postContent.length} / {postLimit}
          </span>

          <div className="ml-auto md:ml-1 mt-1 md:mt-0">
            <button
              type="button"
              onClick={() => handleShowModal(false)}
              className="rounded text-sm md:text-base border mx-2 border-blue-500 text-blue-500 py-1 px-3 hover:transition-all hover:text-white hover:bg-blue-500"
            >
              Cancel
            </button>

            <button
              disabled={
                isLoading ||
                postContent.length === 0 ||
                postContent.length > postLimit
              }
              className={`btn btn-primary text-sm md:text-base py-1 px-3 border border-blue-500 hover:transition-all ${
                postContent.length === 0 ? "opacity-70" : ""
              }`}
            >
              {isEditMode
                ? isLoading
                  ? "Edit post..."
                  : "Edit post"
                : isLoading
                ? "Add post..."
                : "Add post"}
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
                key={index}
                type="button"
                onClick={() => handleEmojiClick(emoji)}
                className="m-1 w-7 h-7 flex flex-row items-center justify-center hover:bg-slate-200 hover:scale-110 transition-all rounded p-1"
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

AddPost.defaultProps = {
  handleShowModal: () => {},
};
