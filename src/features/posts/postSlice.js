import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { logoutUser } from "../auth";

export const addPost = createAsyncThunk("posts/addPost", async (postData) => {
  try {
    const { data: posts } = await axios.post("/api/posts", { postData });

    return posts;
  } catch (error) {
    console.log(error.response);
  }
});

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId, loaderDispatch }) => {
    try {
      loaderDispatch({ type: "IS_DELETING", payload: true });
      const { data: posts } = await axios.delete(`/api/posts/${postId}`);

      return posts;
    } catch (error) {
      console.log(error);
    } finally {
      loaderDispatch({ type: "IS_DELETING", payload: false });
    }
  }
);

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const { data: posts } = await axios.get("/api/posts");

    return posts;
  } catch (error) {
    console.log(error);
  }
});

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, loaderDispatch }, { rejectWithValue }) => {
    try {
      loaderDispatch({ type: "IS_LIKE_LOADING", payload: true });
      const {
        data: { posts },
      } = await axios.post(`/api/posts/like/${postId}`);

      return posts;
    } catch (error) {
      if (error.response.status === 400)
        return rejectWithValue("Post already liked!");
      else {
        return rejectWithValue("Something went wrong!");
      }
    } finally {
      loaderDispatch({ type: "IS_LIKE_LOADING", payload: false });
    }
  }
);

export const disLikePost = createAsyncThunk(
  "posts/disLikePost",
  async ({ postId, loaderDispatch }, { rejectWithValue }) => {
    try {
      loaderDispatch({ type: "IS_LIKE_LOADING", payload: true });
      const {
        data: { posts },
      } = await axios.post(`/api/posts/dislike/${postId}`);

      return posts;
    } catch (error) {
      if (error.response.status === 400)
        return rejectWithValue("Cannot dislike a post.");
      else {
        return rejectWithValue("Something went wrong!");
      }
    } finally {
      loaderDispatch({ type: "IS_LIKE_LOADING", payload: false });
    }
  }
);

export const editPost = createAsyncThunk("posts/editPost", async (postData) => {
  try {
    const {
      data: { posts },
    } = await axios.post(`/api/posts/edit/${postData._id}`, {
      postData,
    });

    return posts;
  } catch (error) {
    console.log(error.response);
  }
});

export const getBookmarkPosts = createAsyncThunk(
  "posts/getBookmarkPosts",
  async () => {
    try {
      const {
        data: { bookmarks },
      } = await axios.get("/api/users/bookmark");

      return bookmarks;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addPostInBookmarks = createAsyncThunk(
  "posts/addPostInBookmarks",
  async ({ postId, loaderDispatch }) => {
    try {
      loaderDispatch({ type: "IS_BOOKMARK_LOADING", payload: true });
      const {
        data: { bookmarks },
      } = await axios.post(`/api/users/bookmark/${postId}`);

      return bookmarks;
    } catch (error) {
      console.log(error);
    } finally {
      loaderDispatch({ type: "IS_BOOKMARK_LOADING", payload: false });
    }
  }
);

export const removePostFromBookmarks = createAsyncThunk(
  "posts/removePostFromBookmarks",
  async ({ postId, loaderDispatch }) => {
    try {
      loaderDispatch({ type: "IS_BOOKMARK_LOADING", payload: true });
      const {
        data: { bookmarks },
      } = await axios.post(`/api/users/remove-bookmark/${postId}`);

      return bookmarks;
    } catch (error) {
      console.log(error);
    } finally {
      loaderDispatch({ type: "IS_BOOKMARK_LOADING", payload: false });
    }
  }
);

export const commentOnPost = createAsyncThunk(
  "posts/commentOnPost",
  async ({ postId, comment, setIsCommentPosting }, { rejectWithValue }) => {
    try {
      setIsCommentPosting(true);
      const { data: posts } = await axios.post(`/api/posts/comment/${postId}`, {
        comment,
      });

      return posts;
    } catch (error) {
      return rejectWithValue("Something went wrong!");
    } finally {
      setIsCommentPosting(false);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    bookmarks: [],
    modalType: "",
    isLoading: false,
    likeError: "",
    deleteError: "",
    errorMessage: "",
    isEditMode: false,
    currentEditPost: null,
  },
  reducers: {
    setModalType: (state, { payload }) => {
      state.modalType = payload;
    },

    setCurrentEditPost: (state, { payload }) => {
      state.currentEditPost = payload;
      state.isEditMode = payload ? true : false;
    },
  },
  extraReducers: {
    [logoutUser]: (state) => {
      state.posts = [];
      state.bookmarks = [];
    },
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts.reverse();
    },
    [getPosts.rejected]: (state) => {
      state.isLoading = false;
      state.errorMessage = "Could not fetch the posts!";
    },
    [addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [addPost.fulfilled]: (state, { payload }) => {
      state.modalType = "";
      state.isLoading = false;
      state.posts = payload.posts.reverse();
    },
    [addPost.rejected]: (state) => {
      state.modalType = "";
      state.isLoading = false;
      state.errorMessage = "Could not add the posts!";
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts.reverse();
    },
    [deletePost.rejected]: (state) => {
      state.deleteError = "Could not delete the post!";
    },
    [likePost.fulfilled]: (state, { payload }) => {
      state.posts = payload.reverse();
    },
    [likePost.rejected]: (state, { payload }) => {
      state.likeError = payload;
    },
    [disLikePost.fulfilled]: (state, { payload }) => {
      state.posts = payload.reverse();
    },
    [disLikePost.rejected]: (state, { payload }) => {
      state.likeError = payload;
    },
    [editPost.pending]: (state) => {
      state.isLoading = true;
    },
    [editPost.fulfilled]: (state, { payload }) => {
      state.modalType = "";
      state.isLoading = false;
      state.isEditMode = false;
      state.currentEditPost = null;
      state.posts = payload.reverse();
    },
    [editPost.rejected]: (state) => {
      state.modalType = "";
      state.isLoading = false;
      state.isEditMode = false;
    },
    [getBookmarkPosts.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [getBookmarkPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.bookmarks = payload;
    },
    [getBookmarkPosts.rejected]: (state) => {
      state.isLoading = false;
      state.errorMessage = "Could not fetch the bookmarks!";
    },
    [addPostInBookmarks.fulfilled]: (state, { payload }) => {
      state.bookmarks = payload.reverse();
    },
    [removePostFromBookmarks.fulfilled]: (state, { payload }) => {
      state.bookmarks = payload.reverse();
    },
    [commentOnPost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts.reverse();
    },
  },
});

export const postReducer = postSlice.reducer;
export const { setModalType, setCurrentEditPost } = postSlice.actions;
export const usePosts = () => useSelector((state) => state.posts);
