/**
 * @description Function returns the post of users to which current logged-in user does not follow.
 *
 * @param  {object} loggedInUser
 * @param  {array} posts
 * @param  {array} loggedInUserfollowings
 * @returns {array} filtered posts
 */

export const getExploreFeed = (loggedInUser, posts, loggedInUserfollowings) => {
  const followingUserIdSet = new Set();
  loggedInUserfollowings?.forEach(({ _id }) => followingUserIdSet.add(_id));
  return posts?.filter(
    ({ userId }) =>
      loggedInUser._id !== userId && !followingUserIdSet.has(userId)
  );
};

/**
 * @description Function returns all the post of current logged-in user and the following users post.
 *
 * @param  {object} loggedInUser
 * @param  {array} posts
 * @param  {array} loggedInUserfollowings
 * @returns {array} filtered posts
 */

export const getHomeFeed = (loggedInUser, posts, loggedInUserfollowings) => {
  const followingUserIdSet = new Set();
  loggedInUserfollowings?.forEach(({ _id }) => followingUserIdSet.add(_id));
  return posts?.filter(
    ({ userId }) =>
      loggedInUser._id === userId || followingUserIdSet.has(userId)
  );
};

/**
 * @description Function sorts the posts based on sort type applied by user.
 *
 * @param  {array} posts
 * @param  {string} sortType
 * @returns {array} sorted posts based on type
 */

export const getPostsBySortType = (posts, sortType) => {
  switch (sortType) {
    case "SORT_BY_RECENT":
      return [...posts].sort(
        (post1, post2) => new Date(post2.updatedAt) - new Date(post1.updatedAt)
      );

    case "SORT_BY_TRENDING":
      return [...posts].sort((post1, post2) => {
        const totalReactionsOnPost1 =
          post1.comments.length + post1.likes.likedBy.length;

        const totalReactionsOnPost2 =
          post2.comments.length + post2.likes.likedBy.length;
        return totalReactionsOnPost2 - totalReactionsOnPost1;
      });

    default:
      return posts;
  }
};
