import React from "react";
import { Sidebar, TopContributors } from "../../common";

export const Bookmark = () => {
  return (
    <div className="grid-container">
      <Sidebar />
      <div className="main">Bookmark</div>;
      <TopContributors />
    </div>
  );
};
