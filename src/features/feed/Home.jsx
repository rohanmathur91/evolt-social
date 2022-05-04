import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts, usePosts, PostCard } from "../posts";
import { Sidebar, TopContributors } from "../../common";

export const Home = () => {
  const { posts } = usePosts();
  const dispatch = useDispatch();

  console.log(posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="grid-container">
      <Sidebar />
      <TopContributors />

      <main className="main pb-20 px-2 md:px-0">
        {posts?.length > 0 &&
          posts.map((post) => <PostCard key={post._id} {...post} />)}
      </main>
    </div>
  );
};
