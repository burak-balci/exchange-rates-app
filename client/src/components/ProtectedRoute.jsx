import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let token = false;

  localStorage.getItem("token") ? (token = true) : (token = false);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
