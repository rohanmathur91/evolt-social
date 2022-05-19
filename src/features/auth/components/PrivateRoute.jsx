import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../authSlice";
import { Sidebar, Suggestions } from "../../../common";

export const PrivateRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <div className="grid-container">
      <Sidebar />
      <Outlet />
      <Suggestions />
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
