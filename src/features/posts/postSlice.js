import axios from "axios";
import { useSelector } from "react-redux";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const addPost = createAsyncThunk("posts/addPost", async(post) => {
//     try{
// const {data} = await axios.post('')
//     }catch{

//     }
// });

export const getPosts = createAsyncThunk("posts/getPost", async () => {
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
    errorMessage: "",
  },
  reducer: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts;
    },
    [getPosts.rejected]: (state) => {
      state.isLoading = false;
      state.errorMessage = "Could not fetch the posts!";
    },
  },
});

export const postReducer = postSlice.reducer;
export const usePosts = () => useSelector((state) => state.post);
