import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../auth";
import { usePosts, commentOnPost } from "./postSlice";
import { Sidebar, TopContributors, CircularLoader } from "../../common";
import { PostCard, CommentCard } from "./components";
import { getSinglePost } from "./utils";

export const SinglePost = () => {
  const { user } = useAuth();
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts } = usePosts();
  const [post, setPost] = useState(null);
  const [isCommentPosting, setIsCommentPosting] = useState(false);
  const [comment, setComment] = useState({
    comment: "",
    replies: [],
  });
  const { username, profileUrl, firstName } = user ?? {};

  useEffect(() => {
    setPost(getSinglePost(posts, postId));
  }, [posts, postId]);

  const handleCommentChange = (e) => {
    setComment((prevComment) => ({ ...prevComment, comment: e.target.value }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    dispatch(commentOnPost({ postId, comment, setIsCommentPosting }));
    setComment((prevComment) => ({ ...prevComment, comment: "" }));
  };

  return (
    <div className="grid-container">
      <Sidebar />
      <TopContributors />

      <main className="main w-full pb-10 px-2 md:px-0 max-w-xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 py-2 px-4 flex items-center justify-center rounded text-blue-500 hover:bg-blue-100"
        >
          <span className="material-icons-outlined text-xl mr-1">
            arrow_back
          </span>
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
              {profileUrl ? (
                <img
                  alt={username}
                  loading="lazy"
                  src={profileUrl}
                  className="w-10 h-10 flex-shrink-0 mr-2 object-cover rounded-full bg-gray-200"
                />
              ) : (
                <div className="w-10 h-10 text-lg flex-shrink-0 flex items-center justify-center font-semibold object-cover rounded-full bg-blue-500 text-white">
                  {firstName[0].toUpperCase()}
                </div>
              )}

              <div className="ml-2 w-full bg-white border border-blue-300 rounded-lg flex items-center px-2">
                <input
                  autoFocus
                  type="text"
                  value={comment.comment}
                  onChange={handleCommentChange}
                  placeholder="Post your comment..."
                  className="mt-1 text-base w-full"
                />
                <button
                  disabled={!comment.comment}
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
                post.comments.map((comment) => (
                  <CommentCard key={comment._id} {...comment} />
                ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};
