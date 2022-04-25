import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  Posts,
  Search,
  Signup,
  Bookmark,
  Profile,
  Explore,
  Followers,
  Following,
  Notifications,
} from "./pages";
import { Navbar, Sidebar, TopContributors } from "./components";

const App = () => {
  return (
    <div className="grid-container text-neutral-900">
      <Navbar />
      <Sidebar />
      <TopContributors />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/search" element={<Search />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile/:userId/" element={<Profile />}>
          <Route index element={<Posts />} />
          <Route path="followers" element={<Followers />} />
          <Route path="following" element={<Following />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;