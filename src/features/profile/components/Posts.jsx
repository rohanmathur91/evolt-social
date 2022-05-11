import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { usePosts, PostCard, getPosts } from "../../posts";
import { CircularLoader } from "../../../common";
import { getCurrentUserPosts } from "../utils";

export const Posts = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { posts, isLoading } = usePosts();
  const currentUserPosts = getCurrentUserPosts(userId, posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="p-4">
      {isLoading ? (
        <CircularLoader size="2rem" customStyle="mt-8 text-blue-500" />
      ) : currentUserPosts.length > 0 ? (
        currentUserPosts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <p className="text-center font-semibold mt-8">No posts to show.</p>
      )}
    </div>
  );
};
