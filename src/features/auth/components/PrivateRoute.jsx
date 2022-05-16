import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../authSlice";
import { Sidebar, TopContributors } from "../../../common";

export const PrivateRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <div className="grid-container">
      <Sidebar />
      <Outlet />
      <TopContributors />
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
