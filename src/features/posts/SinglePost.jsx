import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useAuth } from "../auth";
import { usePosts, commentOnPost } from "./postSlice";
import { CircularLoader, useDocumentTitle, useScrollToTop } from "../../common";
import { PostCard, CommentCard } from "./components";

export const SinglePost = () => {
  const { user } = useAuth();
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts } = usePosts();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [isCommentPosting, setIsCommentPosting] = useState(false);

  useScrollToTop();
  useDocumentTitle(post ? `${post.firstName} ${post.lastName}` : "Post");

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { post },
        } = await axios.get(`/api/posts/${postId}`);

        setPost(post);
      } catch (error) {
        toast.error("Could not fetch the post!");
      }
    })();
  }, [posts, postId]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    setIsCommentPosting(true);
    dispatch(commentOnPost({ postId, comment: comment.trim() })).finally(() => {
      setIsCommentPosting(false);
    });

    setComment("");
  };

  return (
    <main className="main w-full pb-20 px-2 md:px-0 max-w-xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 mt-4 md:mt-0 py-2 px-4 flex items-center justify-center rounded text-blue-500 hover:bg-blue-100 dark:hover:bg-gray-800"
      >
        <span className="material-icons-outlined text-xl mr-1">arrow_back</span>
        Go back
      </button>
      {!post ? (
        <CircularLoader size="2rem" customStyle="text-blue-500" />
      ) : (
        <>
          <PostCard post={post} />

          <form
            onSubmit={handleCommentSubmit}
            className="my-8 flex items-center"
          >
            {user?.profileImage ? (
              <img
                loading="lazy"
                src={user.profileImage?.url || ""}
                alt={user.profileImage?.original_filename || ""}
                className="w-10 h-10 flex-shrink-0 mr-2 object-cover rounded-full bg-gray-200"
              />
            ) : (
              <div className="w-10 h-10 text-lg flex-shrink-0 flex items-center justify-center font-semibold rounded-full bg-blue-500 text-white">
                {user?.firstName[0].toUpperCase()}
              </div>
            )}

            <div className="ml-2 w-full bg-white dark:bg-gray-800 border border-blue-300 rounded-lg flex items-center px-2">
              <input
                autoFocus
                type="text"
                value={comment}
                onChange={handleCommentChange}
                placeholder="Post your comment..."
                className="mt-1 text-base w-full dark:bg-gray-800"
              />
              <button
                disabled={!comment.trim()}
                className={`btn btn-primary text-sm md:text-base py-1 px-3 ${
                  isCommentPosting ? "relative" : ""
                }`}
              >
                {isCommentPosting && (
                  <CircularLoader
                    size="16px"
                    position="center"
                    customStyle="text-red-500 text-white"
                  />
                )}
                <span className={isCommentPosting ? "invisible" : ""}>
                  Post
                </span>
              </button>
            </div>
          </form>

          <div>
            {post.comments.length > 0 &&
              [...post.comments]
                .reverse()
                .map((comment) => (
                  <CommentCard
                    key={comment._id}
                    postId={postId}
                    commentData={comment}
                  />
                ))}
          </div>
        </>
      )}
    </main>
  );
};
