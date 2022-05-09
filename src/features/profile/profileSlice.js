import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const followUser = createAsyncThunk(
  "profile/followUser",
  async ({ followUserId, setIsFollowLoader }) => {
    try {
      setIsFollowLoader(true);
      const {
        data: {
          user: { following },
        },
      } = await axios.post(`/api/users/follow/${followUserId}`);

      return following;
    } catch (error) {
      console.log(error);
    } finally {
      setIsFollowLoader(false);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "profile/unfollowUser",
  async ({ followUserId, setIsFollowLoader }) => {
    try {
      setIsFollowLoader(true);
      const {
        data: {
          user: { following },
        },
      } = await axios.post(`/api/users/unfollow/${followUserId}`);

      return following;
    } catch (error) {
      console.log(error.response);
    } finally {
      setIsFollowLoader(false);
    }
  }
);

export const getCurrentUserPosts = createAsyncThunk(
  "profile/getCurrentUserPosts",
  async (username) => {
    try {
      const { data: posts } = await axios.get(`/api/posts/user/${username}`);

      return posts;
    } catch (error) {
      console.log(error);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    isLoading: false,
    followers: [],
    following: [],
    currentUserPosts: [],
  },
  reducers: {},
  extraReducers: {
    [followUser.pending]: (state) => {
      state.isLoading = true;
    },
    [followUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.following = payload;
    },
    [unfollowUser.pending]: (state) => {
      state.isLoading = true;
    },
    [unfollowUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.following = payload;
    },
    [getCurrentUserPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getCurrentUserPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.currentUserPosts = payload;
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const useProfile = () => useSelector((state) => state.profile);
