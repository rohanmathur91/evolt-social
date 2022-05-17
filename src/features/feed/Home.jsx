import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../auth";
import { useProfile } from "../profile";
import { getPosts, usePosts, PostCard, setPostSortType } from "../posts";
import {
  Sidebar,
  useModal,
  POSTMODAL,
  CircularLoader,
  useScrollToTop,
  TopContributors,
  useDocumentTitle,
} from "../../common";
import { getHomeFeed, getPostsBySortType } from "./utils";

export const Home = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { handleModalType } = useModal();
  const { loggedInUserfollowings } = useProfile();
  const { posts, isLoading, postSortType } = usePosts();
  const homeFeed = getHomeFeed(user, posts, loggedInUserfollowings);
  const sortedHomeFeed = getPostsBySortType(homeFeed, postSortType);

  useScrollToTop();
  useDocumentTitle("Feed");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleSortTypeClick = (type) => {
    dispatch(setPostSortType(type));
  };

  return (
    <div className="grid-container">
      <Sidebar />
      <TopContributors />
      <main className="main pb-12 px-2 md:px-0">
        <div className="mt-6 md:mt-0 max-w-xl mx-auto mb-4">
          <h4 className="font-semibold text-blue-500 mb-4 text-center">
            Your Feed
          </h4>

          <button
            title="Add post"
            onClick={() => handleModalType(POSTMODAL)}
            className="bg-white w-full p-2 rounded-lg border"
          >
            <span className="flex items-center">
              {user?.profileImage ? (
                <img
                  loading="lazy"
                  src={user.profileImage?.url || ""}
                  alt={user.profileImage?.original_filename || ""}
                  className="w-11 h-11 md:w-12 md:h-12 mr-3 object-cover rounded-full bg-gray-200"
                />
              ) : (
                <span className="w-11 h-11 md:w-12 md:h-12 text-xl mr-3 flex flex-shrink-0 items-center justify-center font-semibold rounded-full bg-blue-500 text-white">
                  {user?.firstName[0].toUpperCase()}
                </span>
              )}

              <span className="text-gray-400 border p-2 w-full text-left rounded-lg hover:bg-slate-100">
                What's on your mind?
              </span>
            </span>
            <span className="flex items-center ml-2 pt-2">
              <span className="material-icons-outlined pt-[2px] hover:cursor-pointer text-2xl text-blue-500">
                add_reaction
              </span>
              <span className="text-sm text-gray-400 ml-2 mr-4">Reactions</span>
              <span className="material-icons-outlined hover:cursor-pointer text-2xl text-blue-500">
                add_photo_alternate
              </span>
              <span className="text-sm text-gray-400 ml-2">Photo or Video</span>
            </span>
          </button>

          <div className="flex items-center gap-2 my-6">
            <span className="flex-shrink-0 text-sm text-blue-500 font-semibold">
              Sort by:
            </span>
            <button
              title="Sort by Recent"
              onClick={() => handleSortTypeClick("SORT_BY_RECENT")}
              className={`${
                postSortType === "SORT_BY_RECENT"
                  ? "border-blue-400"
                  : "border-transparent"
              } btn w-full border flex items-center justify-center font-semibold py-2 px-4 bg-blue-100 text-blue-500 rouded text-sm`}
            >
              <span className="material-icons-outlined mr-2">
                view_timeline
              </span>
              Recent
            </button>
            <button
              title="Sort by Trending"
              onClick={() => handleSortTypeClick("SORT_BY_TRENDING")}
              className={`${
                postSortType === "SORT_BY_TRENDING"
                  ? "border-blue-400"
                  : "border-transparent"
              } btn w-full border flex items-center justify-center font-semibold py-2 px-4 bg-blue-100 text-blue-500 rouded text-sm`}
            >
              <span className="material-icons-outlined mr-2">trending_up</span>
              Trending
            </button>
          </div>
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
