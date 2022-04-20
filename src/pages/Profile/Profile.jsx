import React from "react";
import { Outlet } from "react-router-dom";

export const Profile = () => {
  return (
    <main className="main">
      <h1>Adarsh Balika</h1>
      <Outlet />
    </main>
  );
};
