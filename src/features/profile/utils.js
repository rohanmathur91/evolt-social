/**
 * @description Function returns all the posts of current user based on userId
 *
 * @param  {string} userId
 * @param  {array} posts
 * @returns  {array} current user posts
 */

export const getCurrentUserPosts = (userId, posts) => {
  return posts.filter(({ userId: _id }) => _id === userId);
};
