import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const data = await axios.post("/api/auth/login", credentials);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const signupUser = createAsyncThunk(
  "auth/signup",
  async ({ credentials }) => {
    try {
      const data = await axios.post("/api/auth/signup", credentials);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    updateUser: (state, { payload }) => {
      state.user = payload;
    },

    logoutUser: (state) => {
      state.user = null;
    },
  },
});

// export {};
export const authReducer = authSlice.reducer;
export const { updateUser } = authSlice.actions;
