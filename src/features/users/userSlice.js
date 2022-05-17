import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const getSearchedUsers = createAsyncThunk(
  "users/getSearchedUsers",
  async (searchQuery = "", { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();

      const {
        data: { users },
      } = await axios.get(`/api/users?search=${searchQuery}`);

      return { users, loggedInUser: auth.user, searchQuery };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    userlist: [],
    suggestions: [],
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
      state.suggestions =
        payload.searchQuery === "" ? state.userlist : state.suggestions;
    },
  },
});

export const userReducer = userSlice.reducer;
export const useUsers = () => useSelector((state) => state.users);
