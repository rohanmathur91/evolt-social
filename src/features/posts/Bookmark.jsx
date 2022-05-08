import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePosts, getBookmarkPosts } from "./postSlice";
import { Sidebar, TopContributors } from "../../common";
import { PostCard } from "./components";

export const Bookmark = () => {
  const dispatch = useDispatch();
  const { isLoading, bookmarks } = usePosts();

  useEffect(() => {
    dispatch(getBookmarkPosts());
  }, [dispatch]);

  return (
    <div className="grid-container">
      <Sidebar />
      <TopContributors />
      <main className="main pb-20 px-2 md:px-0">
        {isLoading ? (
          <p className="text-center font-semibold mt-8">Loading...</p>
        ) : bookmarks.length ? (
          bookmarks.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <p className="text-center font-semibold mt-8">No posts to show</p>
        )}
      </main>
    </div>
  );
};
