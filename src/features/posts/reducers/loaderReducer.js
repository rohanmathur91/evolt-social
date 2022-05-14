export const initialLoaderState = {
  showMore: false,
  isDeleting: false,
  isLikeLoading: false,
  isBookmarkLoading: false,
};

export const loaderReducer = (loaderState, { type, payload }) => {
  switch (type) {
    case "SHOW_MORE":
      return { ...loaderState, showMore: payload };

    case "IS_DELETING":
      return { ...loaderState, isDeleting: payload };

    case "IS_LIKE_LOADING":
      return { ...loaderState, isLikeLoading: payload };

    case "IS_BOOKMARK_LOADING":
      return { ...loaderState, isBookmarkLoading: payload };

    default:
      throw new Error(`${type} action type not found`);
  }
};
