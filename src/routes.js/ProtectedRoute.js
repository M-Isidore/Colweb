import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const name = JSON.parse(localStorage.getItem("log"));

  return name ? children : <Navigate to="/" />;
};
