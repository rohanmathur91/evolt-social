import React, { useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  usePosts,
  likePost,
  disLikePost,
  deletePost,
  setCurrentEditPost,
  addPostInBookmarks,
  removePostFromBookmarks,
} from "../postSlice";
import { useAuth } from "../../auth";
import { loaderReducer, initialLoaderState } from "../reducers";
import { useModal, CircularLoader, POSTMODAL } from "../../../common";
import { getDate, getPostLikedStatus, getPostBookmarkStatus } from "../utils";

export const PostCard = ({ post }) => {
  const { user } = useAuth();
  const { bookmarks } = usePosts();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { handleModalType } = useModal();
  const [
    { showMore, isDeleting, isLikeLoading, isBookmarkLoading },
    loaderDispatch,
  ] = useReducer(loaderReducer, initialLoaderState);
  const {
    _id,
    likes,
    imageUrl,
    content,
    userId,
    isEdited,
    username,
    firstName,
    lastName,
    updatedAt,
    comments,
    profileImage,
  } = post;
  const isPostLiked = getPostLikedStatus(user, likes);
  const isBookmarked = getPostBookmarkStatus(_id, bookmarks);

  const handleShowMoreClick = () => {
    loaderDispatch({ type: "SHOW_MORE", payload: !showMore });
  };

  const handleEditPostClick = () => {
    handleModalType(POSTMODAL);
    dispatch(setCurrentEditPost({ ...post, isEdited: true }));
    loaderDispatch({ type: "SHOW_MORE", payload: false });
  };

  const handleDeletePostClick = () => {
    dispatch(deletePost({ postId: _id, loaderDispatch }));
    if (pathname.includes("post")) {
      navigate("/");
    }
  };

  const handleLikePostClick = () => {
    if (!isPostLiked) {
      dispatch(likePost({ postId: _id, loaderDispatch }));
    } else {
      dispatch(disLikePost({ postId: _id, loaderDispatch }));
    }
  };

  const handleBookmarkPostClick = () => {
    if (!isBookmarked) {
      dispatch(addPostInBookmarks({ postId: _id, loaderDispatch }));
    } else {
      dispatch(removePostFromBookmarks({ postId: _id, loaderDispatch }));
    }
  };

  const handleSinglePostClick = () => {
    if (!pathname.includes("post")) navigate(`/post/${_id}`);
  };

  return (
    <article className="border rounded-lg my-4 md:mt-0 max-w-xl mx-auto shadow-md bg-white relative">
      <section className="p-2 pl-4 pt-4 flex items-center">
        <Link
          title={username}
          to={`/profile/${userId}`}
          className="flex items-center"
        >
          {profileImage ? (
            <img
              loading="lazy"
              src={profileImage.url}
              alt={profileImage.original_filename}
              className="w-11 h-11 md:w-12 md:h-12 mr-4 object-cover rounded-full bg-gray-200 hover:opacity-75"
            />
          ) : (
            <div className="w-11 h-11 md:w-12 md:h-12 text-xl mr-4 flex flex-shrink-0 items-center hover:opacity-75 justify-center font-semibold rounded-full bg-blue-500 text-white">
              {firstName[0].toUpperCase()}
            </div>
          )}

          <div>
            <span className="font-semibold line-clamp-1">
              {firstName} {lastName}
            </span>
            <span className="text-gray-500 text-sm font-normal flex items-center line-clamp-1">
              @{username}
              <span className="mx-[6px] font-semibold">•</span>
              {getDate(updatedAt)}
              {isEdited && (
                <>
                  <span className="mx-[6px] font-semibold">•</span>edited
                </>
              )}
            </span>
          </div>
        </Link>

        {username === user?.username && (
          <button
            data-tooltip="More"
            onClick={handleShowMoreClick}
            className="tooltip mx-2 w-10 h-10 ml-auto flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100"
          >
            <span className="material-icons-outlined text-2xl">more_horiz</span>
          </button>
        )}

        {showMore && (
          <div className="absolute top-14 right-7 z-[1] w-32 bg-white shadow-xl flex flex-col p-2 border rounded-lg">
            <button
              onClick={handleEditPostClick}
              className="py-2 px-4 text-sm flex items-center text-blue-500 hover:bg-blue-100 rounded"
            >
              <span className="material-icons-outlined text-xl mr-2">edit</span>
              Edit
            </button>
            <button
              disabled={isDeleting}
              onClick={handleDeletePostClick}
              className={`${
                isDeleting ? "relative" : ""
              } py-2 px-4 text-sm flex items-center text-red-500 hover:bg-red-100 rounded`}
            >
              {isDeleting && (
                <CircularLoader
                  size="1rem"
                  position="center"
                  customStyle="text-red-500"
                />
              )}
              <span
                className={`${
                  isDeleting ? "invisible" : ""
                } material-icons-outlined text-xl mr-2`}
              >
                delete
              </span>
              <span className={isDeleting ? "invisible" : ""}>Delete</span>
            </button>
          </div>
        )}
      </section>

      {imageUrl && (
        <img
          alt={username}
          loading="lazy"
          src={imageUrl}
          onClick={handleSinglePostClick}
          className="w-full h-80 cursor-pointer aspect-[2/1] mt-1 mb-2 bg-gray-200"
        />
      )}

      <p
        onClick={handleSinglePostClick}
        className="py-2 px-5 text-sm lg:text-base cursor-pointer mb-2 break-normal"
      >
        {content}
      </p>
      <section className="flex flex-row items-center justify-between py-2 mx-5 border-t">
        <div className="flex text-gray-900">
          <div className="flex items-center w-16">
            <button
              data-tooltip="Like"
              disabled={isLikeLoading}
              onClick={handleLikePostClick}
              className="tooltip w-10 h-10 flex items-center justify-center rounded-full hover:text-blue-500 hover:bg-blue-100"
            >
              {isPostLiked ? (
                <span className="material-icons text-xl sm:text-[22px] text-blue-500">
                  thumb_up
                </span>
              ) : (
                <span className="material-icons-outlined text-xl sm:text-[22px]">
                  thumb_up
                </span>
              )}
            </button>
            <span className="text-sm ml-1">{likes?.likeCount}</span>
          </div>

          <div className="flex items-center">
            <button
              data-tooltip="Comment"
              onClick={handleSinglePostClick}
              className="tooltip w-10 h-10 flex items-center justify-center rounded-full hover:text-blue-500 hover:bg-blue-100"
            >
              <span className="material-icons-outlined text-xl sm:text-[22px]">
                comment
              </span>
            </button>
            <span className="text-sm ml-1">{comments.length}</span>
          </div>
        </div>

        <button
          data-tooltip="Bookmark"
          disabled={isBookmarkLoading}
          onClick={handleBookmarkPostClick}
          className="tooltip w-10 h-10 flex items-center justify-center rounded-full hover:text-blue-500 hover:bg-blue-100"
        >
          {isBookmarked ? (
            <span className="material-icons text-xl text-blue-500 sm:text-[22px]">
              bookmark
            </span>
          ) : (
            <span className="material-icons-outlined text-xl sm:text-[22px]">
              bookmark_border
            </span>
          )}
        </button>
      </section>
    </article>
  );
};

PostCard.defaultProps = {
  post: {
    _id: "",
    likes: null,
    imageUrl: "",
    content: "",
    userId: "",
    isEdited: false,
    username: "",
    firstName: "",
    lastName: "",
    updatedAt: "",
    comments: [],
    profileImage: null,
  },
};
