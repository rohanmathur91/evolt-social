import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const getSearchedUsers = createAsyncThunk(
  "users/getSearchedUsers",
  async (searchQuery, { getState }) => {
    try {
      const { auth } = getState();

      const {
        data: { users },
      } = await axios.get(`/api/users?search=${searchQuery}`);

      return { users, loggedInUser: auth.user };
    } catch (error) {
      console.log(error.response);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    userlist: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getSearchedUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getSearchedUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.userlist = payload?.users.filter(
        (user) => user._id !== payload.loggedInUser._id
      );
    },
  },
});

export const userReducer = userSlice.reducer;
export const useUsers = () => useSelector((state) => state.users);
