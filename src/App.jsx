import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  Posts,
  Signup,
  Profile,
  Explore,
  Followers,
  Following,
  Bookmark,
} from "./pages";
import { Navbar, Sidebar, Suggestions } from "./components";

const App = () => {
  return (
    <div className="grid-container text-neutral-900">
      <Navbar />
      <Sidebar />
      <Suggestions />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/profile/:userId" element={<Profile />}>
          <Route index element={<Posts />} />
          <Route path="followers" element={<Followers />} />
          <Route path="following" element={<Following />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
