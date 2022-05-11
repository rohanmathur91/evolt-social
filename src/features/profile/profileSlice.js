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
    },
    [unfollowUser.fulfilled]: (state, { payload }) => {
      state.following = payload;
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const useProfile = () => useSelector((state) => state.profile);
