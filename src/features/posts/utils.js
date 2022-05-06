/**
 * @description Takes a date as string and returns formatted date.
 *
 * @param  {string} updatedDate
 * @returns  {string} formatted date
 */

export const getDate = (updatedDate) => {
  let date = new Date(updatedDate);
  date = String(date).split(" ");
  return `${date[1]} ${date[2]}`;
};

/**
 * @description This function gives the status of post liked by user or not.
 *
 * @param  {object} user
 * @param  {object} likes
 * @returns {boolean} status
 */

export const getPostLikedStatus = (user, likes) => {
  return likes?.likedBy.some(({ username }) => username === user?.username);
};

/**
 * @description This function returns the single post depending on postId.
 *
 * @param  {array} posts
 * @param  {string} postId
 * @returns {object} post
 */

export const getSinglePost = (posts, postId) => {
  return posts.find(({ _id }) => _id === postId);
};

export const getPostBookmarkStatus = (postId, bookmarks) => {
  return bookmarks.some(({ _id }) => _id === postId);
};
