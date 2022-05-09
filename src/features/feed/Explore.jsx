import React from "react";
import { Sidebar, TopContributors } from "../../common";

export const Explore = () => {
  return (
    <div className="grid-container">
      <Sidebar />
      <TopContributors />

      <main className="main pb-20 px-2 md:px-0">Explore</main>
    </div>
  );
};
