import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const followUser = createAsyncThunk(
  "profile/followUser",
  async ({ followUserId, setIsFollowLoader }) => {
    try {
      setIsFollowLoader(true);
      const { data } = await axios.post(`/api/users/follow/${followUserId}`);

      console.log(data);
      return [];
    } catch (error) {
      console.log(error.response);
    } finally {
      setIsFollowLoader(false);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "profile/unfollowUser",
  async (followUserId) => {
    try {
      const {
        data: { user },
      } = await axios.post(`/api/users/unfollow/${followUserId}`);

      console.log(user);
    } catch (error) {
      console.log(error.response);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    followers: [],
    following: [],
  },
  reducers: {},
  extraReducers: {
    [followUser.fulfilled]: (state, { payload }) => {
      state.following = payload;
      state.isFollowLoader = false;
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const useProfile = () => useSelector((state) => state.profile);
