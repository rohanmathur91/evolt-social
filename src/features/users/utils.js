/**
 * @description Function returns a boolean value depending upon user is followed or not.
 *
 * @param  {array} following
 * @param  {string} followUserId
 * @returns {boolean} is user in following
 */

export const getFollowingStatus = (following, followUserId) => {
  return following?.some(({ _id }) => _id === followUserId);
};
