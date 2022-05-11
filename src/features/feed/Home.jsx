import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts, usePosts, PostCard } from "../posts";
import { Sidebar, TopContributors, CircularLoader } from "../../common";

export const Home = () => {
  const { posts, isLoading } = usePosts();
  const dispatch = useDispatch();

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
        ) : posts.length > 0 ? (
          posts.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          "explore"
        )}
      </main>
    </div>
  );
};
