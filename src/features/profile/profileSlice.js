import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { loginUser, logoutUser } from "../auth";

export const followUser = createAsyncThunk(
  "profile/followUser",
  async (followUserId, { getState, rejectWithValue }) => {
    try {
      const { auth: loggedInUser } = getState();

      const {
        data: {
          followUser,
          user: { followers, following },
        },
      } = await axios.post(`/api/users/follow/${followUserId}`);

      return { followUser, followers, following, loggedInUser };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "profile/unfollowUser",
  async (followingUserId, { getState, rejectWithValue }) => {
    try {
      const { auth: loggedInUser } = getState();

      const {
        data: {
          followUser,
          user: { followers, following },
        },
      } = await axios.post(`/api/users/unfollow/${followingUserId}`);

      return { followUser, followers, following, loggedInUser };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "profile/getUser",
  async (userId, { rejectWithValue }) => {
    try {
      const {
        data: { user },
      } = await axios.get(`/api/users/${userId}`);

      return user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    currentUser: null,
    isUserLoading: false,
    loggedInUserfollowings: [],
    loggedInUserfollowers: [],
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
      state.loggedInUserfollowings = payload.following;
      state.loggedInUserfollowers = payload.followers;
      state.currentUser =
        payload.loggedInUser.user?._id === state.currentUser?._id
          ? {
              ...state.currentUser,
              following: payload.following,
              followers: payload.followers,
            }
          : payload.followUser._id === state.currentUser?._id
          ? payload.followUser
          : state.currentUser;
    },
    [unfollowUser.pending]: (state) => {
      state.isLoading = true;
    },
    [unfollowUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.loggedInUserfollowings = payload.following;
      state.loggedInUserfollowers = payload.followers;
      state.currentUser =
        payload.loggedInUser.user?._id === state.currentUser?._id
          ? {
              ...state.currentUser,
              following: payload.following,
              followers: payload.followers,
            }
          : payload.followUser._id === state.currentUser?._id
          ? payload.followUser
          : state.currentUser;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loggedInUserfollowings = payload.foundUser.following;
      state.loggedInUserfollowers = payload.foundUser.followers;
    },
    [logoutUser]: (state) => {
      state.currentUser = null;
      state.isUserLoading = false;
      state.loggedInUserfollowings = [];
      state.loggedInUserfollowers = [];
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const useProfile = () => useSelector((state) => state.profile);
