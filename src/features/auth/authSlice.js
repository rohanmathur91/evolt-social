import axios from "axios";
import { createSlice, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const {
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", credentials);

      axios.defaults.headers.common["authorization"] = encodedToken;
      localStorage.setItem("evolt-social-token", encodedToken);

      return foundUser;
    } catch (error) {
      return rejectWithValue("Email or password is incorrect");
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const {
        data: { createdUser, encodedToken },
      } = await axios.post("/api/auth/signup", credentials);

      axios.defaults.headers.common["authorization"] = encodedToken;
      localStorage.setItem("evolt-social-token", encodedToken);

      return createdUser;
    } catch (error) {
      if (error.response.status === 422) {
        return rejectWithValue("Username already exists!");
      }
      return rejectWithValue("Something is wrong, please try again.");
    }
  }
);

export const logoutUser = createAction("auth/logoutUser");

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [logoutUser]: (state) => {
      state.user = null;
      localStorage.removeItem("evolt-social-token");
    },

    [loginUser.pending]: (state) => {
      state.error = "";
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.error = "";
      state.isLoading = false;
      state.user = payload;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [signupUser.pending]: (state) => {
      state.error = "";
      state.isLoading = true;
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      state.error = "";
      state.isLoading = false;
      state.user = payload;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const useAuth = () => useSelector(({ auth }) => auth);
