import React, { useState } from "react";
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
import { useModal } from "../../../common";
import { getDate, getPostLikedStatus, getPostBookmarkStatus } from "../utils";

export const PostCard = ({ post }) => {
  const { user } = useAuth();
  const { bookmarks } = usePosts();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { handleShowModal } = useModal();
  const [showMore, setShowMore] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLikeLoading, setIsLikeLoading] = useState(false);
  const {
    _id,
    likes,
    imageUrl,
    profileUrl,
    content,
    username,
    firstName,
    lastName,
    updatedAt,
    comments,
  } = post;
  const isPostLiked = getPostLikedStatus(user, likes);
  const isBookmarked = getPostBookmarkStatus(_id, bookmarks);

  const handleShowMoreClick = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const handleEditPostClick = () => {
    setShowMore(false);
    handleShowModal(true);
    dispatch(setCurrentEditPost(post));
  };

  const handleDeletePostClick = () => {
    dispatch(deletePost({ postId: _id, navigate, setIsDeleting }));
  };

  const handleLikePostClick = () => {
    if (!isPostLiked) {
      dispatch(likePost({ postId: _id, setIsLikeLoading }));
    } else {
      dispatch(disLikePost({ postId: _id, setIsLikeLoading }));
    }
  };

  const handleBookmarkPostClick = () => {
    if (!isBookmarked) {
      dispatch(addPostInBookmarks(_id));
    } else {
      dispatch(removePostFromBookmarks(_id));
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
          to={`/profile/${username}`}
          className="flex items-center"
        >
          {profileUrl ? (
            <img
              alt={username}
              loading="lazy"
              src={profileUrl}
              className="w-11 h-11 md:w-12 md:h-12 mr-4 object-cover rounded-full bg-gray-200"
            />
          ) : (
            <div className="h-11 min-w-[2.75rem] text-xl md:w-12 md:h-12 mr-4 flex items-center justify-center font-semibold object-cover rounded-full bg-blue-500 text-white">
              {firstName[0].toUpperCase()}
            </div>
          )}

          <div>
            <span className="font-semibold line-clamp-1">
              {firstName} {lastName}
            </span>
            <span className="text-gray-500 text-sm font-normal flex items-center line-clamp-1">
              @{username} <span className="mx-1 font-semibold">•</span>
              {getDate(updatedAt)}
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
          <div className="absolute top-14 right-7 z-[1] w-32 bg-white shadow-md flex flex-col p-2 border rounded-lg">
            <button
              onClick={handleEditPostClick}
              className="py-2 px-4 text-sm flex items-center hover:text-blue-500 hover:bg-blue-100 rounded"
            >
              <span className="material-icons-outlined text-xl mr-2">edit</span>
              Edit
            </button>
            <button
              disabled={isDeleting}
              onClick={handleDeletePostClick}
              className="py-2 px-4 text-sm flex items-center hover:text-red-500 hover:bg-red-100 rounded"
            >
              <span className="material-icons-outlined text-xl mr-2">
                delete
              </span>
              {isDeleting ? "Deleting..." : "Delete"}
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
          className="w-full h-80 cursor-pointer aspect-[2/1] object-cover object-top mt-1 mb-2 bg-gray-200"
        />
      )}

      <p
        onClick={handleSinglePostClick}
        className="py-2 px-5 text-sm lg:text-base cursor-pointer mb-2"
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
    profileUrl: "",
    content: "",
    username: "",
    firstName: "",
    lastName: "",
    updatedAt: "",
  },
};
