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
  async ({ postId, navigate, setIsDeleting }) => {
    try {
      setIsDeleting(true);
      const { data: posts } = await axios.delete(`/api/posts/${postId}`);
      navigate("/");
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

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, setIsLikeLoading }, { rejectWithValue }) => {
    try {
      setIsLikeLoading(true);
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
      setIsLikeLoading(false);
    }
  }
);

export const disLikePost = createAsyncThunk(
  "posts/disLikePost",
  async ({ postId, setIsLikeLoading }, { rejectWithValue }) => {
    try {
      setIsLikeLoading(true);
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
      setIsLikeLoading(false);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    likeError: "",
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
  },
});

export const postReducer = postSlice.reducer;
export const usePosts = () => useSelector((state) => state.posts);
