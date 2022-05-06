import React from "react";
import { usePosts } from "./postSlice";
import { PostCard } from "./PostCard";
import { Sidebar, TopContributors } from "../../common";

export const Bookmark = () => {
  const { bookmarks } = usePosts();

  return (
    <div className="grid-container">
      <Sidebar />
      <TopContributors />
      <main className="main pb-20 px-2 md:px-0">
        {bookmarks.length ? (
          bookmarks.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <p className="text-center font-semibold mt-8">No posts to show</p>
        )}
      </main>
    </div>
  );
};
