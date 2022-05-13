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
  return posts
    ?.filter(
      ({ userId }) =>
        loggedInUser._id === userId || followingUserIdSet.has(userId)
    )
    .reverse();
};
