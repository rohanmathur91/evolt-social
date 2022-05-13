import React from "react";
import { Link } from "react-router-dom";
import { CircularLoader, Sidebar, TopContributors } from "../../common";
import { useAuth } from "../auth";
import { PostCard, usePosts } from "../posts";
import { useProfile } from "../profile";
import { getExploreFeed } from "./utils";

export const Explore = () => {
  const { user } = useAuth();
  const { posts, isLoading } = usePosts();
  const { loggedInUserfollowings } = useProfile();
  const exploreFeed = getExploreFeed(user, posts, loggedInUserfollowings);

  return (
    <div className="grid-container">
      <Sidebar />
      <TopContributors />
      <main className="main pb-20 px-2 md:px-0">
        {isLoading ? (
          <CircularLoader size="2rem" customStyle="mt-8 text-blue-500" />
        ) : exploreFeed.length > 0 ? (
          exploreFeed.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <p className="text-center font-semibold mt-8">
            No post to show.
            <Link to="/" className="text-blue-500 hover:underline ml-1">
              Feed
            </Link>
          </p>
        )}
      </main>
    </div>
  );
};
