import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePosts, getBookmarkPosts } from "./postSlice";
import { Sidebar, TopContributors, CircularLoader } from "../../common";
import { PostCard } from "./components";

export const Bookmark = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, bookmarks } = usePosts();

  useEffect(() => {
    dispatch(getBookmarkPosts());
  }, [posts, dispatch]);

  return (
    <div className="grid-container">
      <Sidebar />
      <TopContributors />
      <main className="main pb-20 px-2 md:px-0">
        <h4 className="font-semibold text-blue-500 my-6 md:mt-0 max-w-xl mx-auto">
          Your bookmarks
        </h4>
        {isLoading && bookmarks.length === 0 ? (
          <CircularLoader size="2rem" customStyle="mt-8 text-blue-500" />
        ) : bookmarks.length ? (
          bookmarks.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <p className="text-center font-semibold mt-8">
            No bookmarks to show.
          </p>
        )}
      </main>
    </div>
  );
};
