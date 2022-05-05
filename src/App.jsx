import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Login,
  Posts,
  Search,
  Signup,
  Bookmark,
  Profile,
  Explore,
  Followers,
  Following,
  SinglePost,
  Notifications,
} from "./features";
import { Navbar } from "./common";
import { PrivateRoute } from "./features";

const App = () => {
  return (
    <div className="text-neutral-900 bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/post/:postId" element={<SinglePost />} />
          <Route path="/bookmarks" element={<Bookmark />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile/:userId/" element={<Profile />}>
            <Route index element={<Posts />} />
            <Route path="followers" element={<Followers />} />
            <Route path="following" element={<Following />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
