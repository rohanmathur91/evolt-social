import React, { useRef, useReducer, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
import {
  useModal,
  POSTMODAL,
  CircularLoader,
  useOutsideClick,
} from "../../../common";
import { getDate, getPostLikedStatus, getPostBookmarkStatus } from "../utils";

export const PostCard = ({ post }) => {
  const { user } = useAuth();
  const { bookmarks } = usePosts();
  const showMoreOptionsRef = useRef(null);
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
    content,
    userId,
    isEdited,
    username,
    firstName,
    lastName,
    updatedAt,
    comments,
    postMedia,
    profileImage,
  } = post;
  const isPostLiked = getPostLikedStatus(user, likes);
  const isBookmarked = getPostBookmarkStatus(_id, bookmarks);

  const handleShowMoreClick = () => {
    loaderDispatch({ type: "SHOW_MORE", payload: !showMore });
  };

  const memoizedHandler = useCallback(handleShowMoreClick, [showMore]);
  useOutsideClick(showMoreOptionsRef, showMore, memoizedHandler);

  const handleEditPostClick = () => {
    handleModalType(POSTMODAL);
    dispatch(setCurrentEditPost({ ...post, isEdited: true }));
    loaderDispatch({ type: "SHOW_MORE", payload: false });
  };

  const handleDeletePostClick = () => {
    loaderDispatch({ type: "IS_DELETING", payload: true });

    dispatch(deletePost(_id)).finally(() => {
      loaderDispatch({ type: "IS_DELETING", payload: false });
    });

    if (pathname.includes("post")) {
      navigate("/");
    }
  };

  const handleLikePostClick = () => {
    let likeDispatchPromise;
    loaderDispatch({ type: "IS_LIKE_LOADING", payload: true });

    if (!isPostLiked) {
      likeDispatchPromise = dispatch(likePost(_id));
    } else {
      likeDispatchPromise = dispatch(disLikePost(_id));
    }

    likeDispatchPromise.finally(() => {
      loaderDispatch({ type: "IS_LIKE_LOADING", payload: false });
    });
  };

  const handleBookmarkPostClick = () => {
    let bookmarkDispatchPromise;
    loaderDispatch({ type: "IS_BOOKMARK_LOADING", payload: true });

    if (!isBookmarked) {
      bookmarkDispatchPromise = dispatch(addPostInBookmarks(_id));
    } else {
      bookmarkDispatchPromise = dispatch(removePostFromBookmarks(_id));
    }

    bookmarkDispatchPromise.finally(() => {
      loaderDispatch({ type: "IS_BOOKMARK_LOADING", payload: false });
    });
  };

  const handleSinglePostClick = () => {
    if (!pathname.includes("post")) navigate(`/post/${_id}`);
  };

  const handleShareClick = () => {
    window.navigator.clipboard.writeText(
      `${window.location.origin}/post/${_id}`
    );
    toast.success("Link copied, share the post!");
  };

  return (
    <article className="border dark:border-gray-700 rounded-lg my-4 md:mt-0 max-w-xl mx-auto shadow-md bg-white dark:bg-gray-800">
      <section className="pr-2 pl-4 pt-4 flex items-center">
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
              className="w-11 h-11 md:w-12 md:h-12 mr-4 border object-cover object-top rounded-full bg-gray-200 hover:opacity-75"
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
            <span className="text-gray-500 dark:text-gray-400 text-sm font-normal flex items-center line-clamp-1">
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
          <div ref={showMoreOptionsRef} className="ml-auto relative">
            <button
              data-tooltip="More"
              onClick={handleShowMoreClick}
              className="tooltip mx-2 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-gray-700"
            >
              <span className="material-icons-outlined text-2xl">
                more_horiz
              </span>
            </button>

            {showMore && (
              <div className="absolute top-8 right-4 z-[1] w-32 bg-white dark:bg-gray-900 shadow-xl flex flex-col p-2 border dark:border-gray-700 rounded-lg">
                <button
                  onClick={handleEditPostClick}
                  className="py-2 px-4 text-sm flex items-center text-blue-500 hover:bg-blue-100 dark:hover:bg-gray-800 rounded"
                >
                  <span className="material-icons-outlined text-xl mr-2">
                    edit
                  </span>
                  Edit
                </button>
                <button
                  disabled={isDeleting}
                  onClick={handleDeletePostClick}
                  className={`${
                    isDeleting ? "relative" : ""
                  } py-2 px-4 text-sm flex items-center text-red-500 dark:text-red-400 hover:bg-red-100 dark:hover:bg-gray-800 rounded`}
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
          </div>
        )}
      </section>

      {postMedia && (
        <div className="flex items-center justify-center">
          <img
            loading="lazy"
            src={postMedia.url}
            alt={postMedia.original_filename}
            onClick={handleSinglePostClick}
            className="cursor-pointer mt-3 mb-1 max-h-[25rem] bg-gray-200 dark:bg-gray-800"
          />
        </div>
      )}

      {content && (
        <p
          onClick={handleSinglePostClick}
          className="py-2 px-5 text-sm lg:text-base cursor-pointer my-2 break-normal"
        >
          {content}
        </p>
      )}

      <section
        className={`flex flex-row items-center justify-between py-2 mx-5 ${
          content ? "border-t dark:border-t-gray-600" : ""
        }`}
      >
        <div className="flex text-gray-900">
          <div className="flex items-center w-16">
            <button
              data-tooltip="Like"
              disabled={isLikeLoading}
              onClick={handleLikePostClick}
              className="tooltip w-10 h-10 flex items-center justify-center rounded-full hover:text-blue-500 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700"
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
            <span className="text-sm ml-1 dark:text-gray-200">
              {likes?.likeCount}
            </span>
          </div>

          <div className="flex items-center w-16">
            <button
              data-tooltip="Comment"
              onClick={handleSinglePostClick}
              className="tooltip w-10 h-10 flex items-center justify-center rounded-full hover:text-blue-500 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700"
            >
              <span className="material-icons-outlined text-xl sm:text-[22px]">
                comment
              </span>
            </button>
            <span className="text-sm ml-1 dark:text-gray-200">
              {comments.length}
            </span>
          </div>

          <button
            data-tooltip="Share"
            onClick={handleShareClick}
            className="tooltip w-10 h-10 flex items-center justify-center rounded-full hover:text-blue-500 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700"
          >
            <span className="material-icons-outlined text-xl mr-[2px] sm:text-[22px]">
              share
            </span>
          </button>
        </div>

        <button
          data-tooltip="Bookmark"
          disabled={isBookmarkLoading}
          onClick={handleBookmarkPostClick}
          className="tooltip w-10 h-10 flex items-center justify-center rounded-full hover:text-blue-500 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700"
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
    postMedia: null,
    profileImage: null,
  },
};
