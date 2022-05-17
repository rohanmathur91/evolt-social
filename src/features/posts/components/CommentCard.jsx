import React, { useRef, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../auth";
import { editPostComment, deletePostComment } from "../postSlice";
import { CircularLoader, useOutsideClick } from "../../../common";
import { getDate } from "../utils";

export const CommentCard = ({ postId, commentData }) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const showMoreOptionsRef = useRef(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [editedComment, setEditedComment] = useState("");
  const {
    _id,
    comment,
    username,
    firstName,
    isEdited,
    lastName,
    commentDate,
    profileImage,
  } = commentData;

  const handleShowMoreOptionsClick = () => {
    setShowMoreOptions((previousValue) => !previousValue);
  };

  const memoizedHandler = useCallback(handleShowMoreOptionsClick, []);
  useOutsideClick(showMoreOptionsRef, showMoreOptions, memoizedHandler);

  const handleEditCommentClick = () => {
    setShowInput(true);
    setEditedComment(comment);
    setShowMoreOptions(false);
  };

  const handleDeleteCommentClick = () => {
    setIsDeleting(true);
    dispatch(deletePostComment({ postId, commentId: _id })).finally(() => {
      setIsDeleting(false);
    });
  };

  const handleCommentInputChange = (e) => {
    setEditedComment(e.target.value);
  };

  const handleCancelClick = () => {
    setShowInput(false);
  };

  const handleCommentFormSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);

    dispatch(
      editPostComment({
        postId,
        commentData: { ...commentData, comment: editedComment, isEdited: true },
      })
    ).finally(() => {
      setIsSaving(false);
      setShowInput(false);
    });
  };

  return (
    <article className="flex bg-white p-2 rounded-lg border mb-4 shadow text-sm">
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

      <div className="w-full">
        <div className="flex">
          <div>
            <p className="font-semibold flex items-center line-clamp-1">
              {firstName} {lastName}
            </p>
            <p className="text-gray-500 line-clamp-1">
              @{username}
              <span className="mx-[6px] font-semibold">•</span>
              {getDate(commentDate)}
              {isEdited && (
                <>
                  <span className="mx-[6px] font-semibold">•</span>edited
                </>
              )}
            </p>
          </div>

          {username === user?.username && (
            <div ref={showMoreOptionsRef} className="ml-auto relative">
              <button
                data-tooltip="More"
                onClick={handleShowMoreOptionsClick}
                className="tooltip mx-2 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100"
              >
                <span className="material-icons-outlined text-2xl">
                  more_horiz
                </span>
              </button>

              {showMoreOptions && (
                <div className="absolute top-8 right-4 z-[1] w-32 bg-white shadow-xl flex flex-col p-2 border rounded-lg">
                  <button
                    onClick={handleEditCommentClick}
                    className="py-2 px-4 text-sm flex items-center text-blue-500 hover:bg-blue-100 rounded"
                  >
                    <span className="material-icons-outlined text-xl mr-2">
                      edit
                    </span>
                    Edit
                  </button>
                  <button
                    disabled={isDeleting}
                    onClick={handleDeleteCommentClick}
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
                    <span className={isDeleting ? "invisible" : ""}>
                      Delete
                    </span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        {showInput ? (
          <form onSubmit={handleCommentFormSubmit} className="flex w-full">
            <input
              autoFocus
              type="text"
              value={editedComment}
              onChange={handleCommentInputChange}
              className="border-b px-0 w-full mr-2"
            />
            <div className="flex items-center">
              <button
                type="button"
                data-tooltip="Cancel"
                onClick={handleCancelClick}
                className="tooltip flex items-center justify-center w-4 h-4 p-3 rounded-full border border-red-400 text-red-500 mr-2"
              >
                <span className="material-icons-outlined text-lg">close</span>
              </button>
              <button
                disabled={isSaving}
                data-tooltip="Save"
                className="tooltip flex items-center justify-center w-4 h-4 p-3 rounded-full border border-blue-500 text-blue-500"
              >
                <span className="material-icons-outlined text-lg">done</span>
              </button>
            </div>
          </form>
        ) : (
          <p className="break-normal mt-2">{comment}</p>
        )}
      </div>
    </article>
  );
};

CommentCard.defaultProps = {
  postId: "",
  commentData: {
    _id: "",
    comment: "",
    username: "",
    firstName: "",
    lastName: "",
    createdAt: "",
    isEdited: false,
    profileImage: null,
  },
};
