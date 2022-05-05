import axios from "axios";
import { useSelector } from "react-redux";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addPost = createAsyncThunk(
  "posts/addPost",
  async ({ postData, handleShowModal }) => {
    try {
      const { data: posts } = await axios.post("/api/posts", { postData });
      handleShowModal(false);
      return posts;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId, setIsDeleting }) => {
    try {
      setIsDeleting(true);
      const { data: posts } = await axios.delete(`/api/posts/${postId}`);
      return posts;
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
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

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    deleteError: "",
    errorMessage: "",
  },
  reducer: {},
  extraReducers: {
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
      state.isLoading = false;
      state.posts = payload.posts.reverse();
    },
    [addPost.rejected]: (state) => {
      state.isLoading = false;
      state.errorMessage = "Could not add the posts!";
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
    [deletePost.rejected]: (state) => {
      state.deleteError = "Could not delete the post!";
    },
  },
});

export const postReducer = postSlice.reducer;
export const usePosts = () => useSelector((state) => state.post);
