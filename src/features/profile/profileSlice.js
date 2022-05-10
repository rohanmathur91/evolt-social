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
  async ({ followingUserId, setIsFollowLoader }) => {
    try {
      setIsFollowLoader(true);
      const {
        data: {
          user: { following },
        },
      } = await axios.post(`/api/users/unfollow/${followingUserId}`);

      return following;
    } catch (error) {
      console.log(error.response);
    } finally {
      setIsFollowLoader(false);
    }
  }
);

export const getUser = createAsyncThunk("profile/getUser", async (userId) => {
  try {
    const {
      data: { user },
    } = await axios.get(`/api/users/${userId}`);

    return user;
  } catch (error) {
    console.log(error.response);
  }
});

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    followers: [],
    following: [],
    currentUser: null,
    isUserLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state) => {
      state.isUserLoading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.isUserLoading = false;
      state.currentUser = payload;
    },
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
  },
});

export const profileReducer = profileSlice.reducer;
export const useProfile = () => useSelector((state) => state.profile);
