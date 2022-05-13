import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../auth";
import { useProfile } from "../profile";
import { getPosts, usePosts, PostCard } from "../posts";
import { Sidebar, TopContributors, CircularLoader } from "../../common";
import { getHomeFeed } from "./utils";

export const Home = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { posts, isLoading } = usePosts();
  const { loggedInUserfollowings } = useProfile();
  const homeFeed = getHomeFeed(user, posts, loggedInUserfollowings);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="grid-container">
      <Sidebar />
      <TopContributors />
      <main className="main pb-20 px-2 md:px-0">
        {isLoading ? (
          <CircularLoader size="2rem" customStyle="mt-8 text-blue-500" />
        ) : homeFeed.length > 0 ? (
          homeFeed.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <p className="text-center font-semibold mt-8">
            Add a new post or follow users.
            <Link to="/explore" className="text-blue-500 hover:underline ml-1">
              Explore
            </Link>
          </p>
        )}
      </main>
    </div>
  );
};
