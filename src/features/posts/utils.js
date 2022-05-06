export const getDate = (updatedDate) => {
  let date = new Date(updatedDate);
  date = String(date).split(" ");
  return `${date[1]} ${date[2]}`;
};

export const getPostLikedStatus = (user, likes) => {
  return likes?.likedBy.some(({ username }) => username === user?.username);
};

export const getSinglePost = (posts, postId) => {
  return posts.find(({ _id }) => _id === postId);
};
