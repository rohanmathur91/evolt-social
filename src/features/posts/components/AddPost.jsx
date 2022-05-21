import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addPost, editPost, usePosts } from "../postSlice";
import { useAuth } from "../../auth";
import { CircularLoader } from "../../../common";
import { emojis, postLimit } from "../data";

export const AddPost = ({ handleModalType }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { isLoading } = usePosts();
  const [isMediaUploading, setIsMediaUploading] = useState(false);
  const { isEditMode, currentEditPost } = usePosts();
  const [postMedia, setPostMedia] = useState(null);
  const [postContent, setPostContent] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  useEffect(() => {
    if (currentEditPost) {
      setPostMedia(currentEditPost.postMedia);
      setPostContent(currentEditPost.content);
    }
  }, [currentEditPost]);

  const handleImageFileChange = async (e) => {
    // converting bytes into megabytes
    const size = e.target.files[0].size * 10 ** -6;

    if (size > 8) {
      toast.error("Please upload small size image.");
      handleModalType("");
      return;
    }

    try {
      setIsMediaUploading(true);
      const postMediaFormData = new FormData();
      postMediaFormData.append("file", e.target.files[0]);
      postMediaFormData.append(
        "upload_preset",
        process.env.REACT_APP_UPLOAD_PRESET_NAME
      );

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: postMediaFormData,
        }
      );
      const { url, original_filename } = await response.json();

      setPostMedia({ url, original_filename });
    } catch (error) {
      toast.error("Image upload failed!");
    } finally {
      setIsMediaUploading(false);
    }
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = user;

    const postData = {
      lastName,
      firstName,
      postMedia,
      content: postContent,
    };

    if (!isEditMode) {
      dispatch(addPost(postData));
    } else {
      dispatch(editPost({ ...currentEditPost, ...postData }));
    }

    if (pathname !== "/" && !pathname.includes("profile")) {
      navigate("/");
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="max-w-xl w-full relative bg-white dark:bg-gray-800 border dark:border-gray-700 p-3 rounded-lg"
    >
      <div className="rounded-lg border-2 border-blue-500 p-3 mb-3">
        <textarea
          autoFocus
          maxLength={postLimit}
          value={postContent}
          onChange={handleContentChange}
          placeholder="What's on your mind?"
          className="w-full h-36 resize-none outline-none dark:text-white dark:bg-gray-800"
        ></textarea>

        {isMediaUploading ? (
          <CircularLoader size="2.5rem" customStyle="text-blue-500 h-32" />
        ) : (
          postMedia && (
            <img
              loading="lazy"
              src={postMedia.url}
              alt={postMedia.original_filename}
              className="w-64 mx-auto h-32 object-contain"
            />
          )
        )}
      </div>
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center">
          <button
            type="button"
            data-tooltip="Add emoji"
            onClick={handleShowEmoji}
            className="tooltip mr-2 w-10 h-10 rounded-full hover:cursor-pointer text-2xl text-blue-500 hover:bg-blue-100 dark:hover:bg-gray-700"
          >
            <span className="material-icons-outlined flex items-center justify-center select-none">
              add_reaction
            </span>
          </button>

          <label
            htmlFor="image-upload"
            data-tooltip="Add image"
            className="tooltip flex items-center"
          >
            <span className="material-icons-outlined select-none w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer text-2xl text-blue-500 hover:bg-blue-100 dark:hover:bg-gray-700">
              add_photo_alternate
            </span>
            <input
              type="file"
              accept="image/*"
              id="image-upload"
              className="invisible w-0 p-0"
              onChange={handleImageFileChange}
            />
          </label>
        </div>

        <span
          className={`${
            postContent.length === postLimit
              ? "text-blue-500"
              : "text-gray-500 dark:text-gray-400"
          } text-xs text-center self-center w-[5rem] md:text-sm font-semibold mx-1`}
        >
          {postContent.length} / {postLimit}
        </span>

        <div className="ml-auto md:ml-1 mt-1 md:mt-0">
          <button
            type="button"
            onClick={() => handleModalType("")}
            className="rounded text-sm md:text-base border mx-2 border-blue-500 text-blue-500 py-1 px-3 hover:text-white hover:bg-blue-500"
          >
            Cancel
          </button>

          <button
            disabled={
              !postMedia &&
              (isLoading ||
                isMediaUploading ||
                postContent.length === 0 ||
                postContent.length > postLimit)
            }
            className={`btn btn-primary text-sm md:text-base py-1 px-3 border border-blue-500 ${
              isLoading ? "relative" : ""
            }`}
          >
            {isLoading && <CircularLoader size="1rem" position="center" />}

            <span className={isLoading ? "invisible" : ""}>
              {isEditMode ? "Edit post" : "Add post"}
            </span>
          </button>
        </div>
      </div>

      {showEmojis && (
        <div
          className="absolute left-0 bottom-[-130px] z-[1] p-2 flex flex-row items-center justify-center flex-wrap max-w-xs rounded bg-white dark:bg-gray-800 border dark:border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          {emojis.map((emoji, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleEmojiClick(emoji)}
              className="m-1 w-7 h-7 flex flex-row items-center justify-center hover:bg-slate-200 dark:hover:bg-gray-700 hover:scale-110 rounded p-1"
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
    </form>
  );
};

AddPost.defaultProps = {
  handleModalType: () => {},
};
