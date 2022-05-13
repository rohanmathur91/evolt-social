import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../auth";
import { useProfile } from "../profile";
import { getPosts, usePosts, PostCard } from "../posts";
import { Sidebar, TopContributors, CircularLoader } from "../../common";
import { getHomeFeed, getPostsBySortType } from "./utils";

export const Home = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { posts, isLoading } = usePosts();
  const { loggedInUserfollowings } = useProfile();
  const [sortType, setSortType] = useState("");
  const homeFeed = getHomeFeed(user, posts, loggedInUserfollowings);
  const sortedHomeFeed = getPostsBySortType(homeFeed, sortType);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleSortTypeClick = (type) => {
    setSortType(type);
  };

  return (
    <div className="grid-container">
      <Sidebar />
      <TopContributors />
      <main className="main pb-12 px-2 md:px-0">
        <div className="flex gap-2 my-6 md:mt-0 max-w-xl mx-auto">
          <button
            onClick={() => handleSortTypeClick("SORT_BY_RECENT")}
            className="btn w-full flex items-center justify-center font-semibold py-2 px-4 bg-blue-100 text-blue-500 rouded text-sm"
          >
            <span className="material-icons-outlined mr-2">view_timeline</span>
            Recent
          </button>
          <button
            onClick={() => handleSortTypeClick("SORT_BY_TRENDING")}
            className="btn w-full flex items-center justify-center font-semibold py-2 px-4 bg-blue-100 text-blue-500 rouded text-sm"
          >
            <span className="material-icons-outlined mr-2">trending_up</span>
            Trending
          </button>
        </div>

        {isLoading ? (
          <CircularLoader size="2rem" customStyle="mt-8 text-blue-500" />
        ) : sortedHomeFeed.length > 0 ? (
          <>
            {sortedHomeFeed.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
            <p className="text-center text-gray-500 mt-8 text-sm">
              You have reached the end.
            </p>
          </>
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
