import { configureStore } from "@reduxjs/toolkit";
import {
  userReducer,
  authReducer,
  postReducer,
  profileReducer,
} from "../features";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    users: userReducer,
    profile: profileReducer,
  },
});
