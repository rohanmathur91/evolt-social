import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Sidebar, TopContributors } from "../../common";
import { PostCard } from "./PostCard";

export const SinglePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { username, profileUrl, firstName, lastName } = post ?? {};

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const {
          data: { post },
        } = await axios.get(`/api/posts/${postId}`);
        setPost(post);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [postId]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputFocus = useCallback((node) => {
    if (node) {
      node.focus();
    }
  }, []);

  return (
    <div className="grid-container">
      <Sidebar />
      <TopContributors />

      <main className="main pb-20 px-2 md:px-0 max-w-xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 py-2 px-4 flex items-center justify-center rounded hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100"
        >
          <span className="material-icons-outlined text-xl mr-1">
            arrow_back
          </span>
          Go back
        </button>
        {!post || isLoading ? (
          <p className="text-center font-semibold mt-8">Loading...</p>
        ) : (
          <>
            <PostCard {...post} />

            <form
              onSubmit={handleCommentSubmit}
              className="mt-8 flex items-center"
            >
              {profileUrl ? (
                <img
                  alt={username}
                  loading="lazy"
                  src={profileUrl}
                  className="w-10 h-10 flex-shrink-0 mr-4 object-cover rounded-full bg-gray-200"
                />
              ) : (
                <div className="w-10 h-10 flex-shrink-0 text-sm flex items-center justify-center font-semibold object-cover rounded-full bg-blue-500 text-white">
                  {firstName[0] + lastName[0]}
                </div>
              )}

              <div className="ml-2 w-full bg-white border border-blue-300 rounded-lg flex items-center px-2">
                <input
                  type="text"
                  value={comment}
                  ref={handleInputFocus}
                  onChange={handleCommentChange}
                  placeholder="Post your comment..."
                  className="mt-1 text-base w-full"
                />
                <button
                  disabled={!comment}
                  className={`${
                    !comment ? "opacity-70" : ""
                  } btn btn-primary text-sm md:text-base py-1 px-3 hover:transition-all`}
                >
                  Post
                </button>
              </div>
            </form>
          </>
        )}
      </main>
    </div>
  );
};
