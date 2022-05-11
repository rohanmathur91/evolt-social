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

      return { foundUser, encodedToken };
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

      return { createdUser, encodedToken };
    } catch (error) {
      if (error.response.status === 422) {
        return rejectWithValue("Username already exists!");
      }
      return rejectWithValue("Something is wrong, please try again.");
    }
  }
);

export const logoutUser = createAction("auth/logoutUser");
export const persistUser = createAction("auth/persistUser");

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [persistUser]: (state) => {
      state.user = JSON.parse(localStorage.getItem("myspace-user"));
      axios.defaults.headers.common["authorization"] =
        localStorage.getItem("myspace-token");
    },
    [logoutUser]: (state) => {
      state.user = null;
      localStorage.removeItem("myspace-user");
      localStorage.removeItem("myspace-token");
      delete axios.defaults.headers.common["authorization"];
    },
    [loginUser.pending]: (state) => {
      state.error = "";
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.error = "";
      state.isLoading = false;
      state.user = payload.foundUser;
      localStorage.setItem("myspace-token", payload.encodedToken);
      localStorage.setItem("myspace-user", JSON.stringify(payload.foundUser));
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
      state.user = payload.createdUser;
      localStorage.setItem("myspace-token", payload.encodedToken);
      localStorage.setItem("myspace-user", JSON.stringify(payload.createdUser));
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const useAuth = () => useSelector((state) => state.auth);
