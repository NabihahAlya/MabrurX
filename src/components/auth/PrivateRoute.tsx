import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/lib/auth";

export const PrivateRoute = () => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const path = location.pathname;

  if (path.startsWith("/admin") && user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  if ((path.startsWith("/user") || path === "/profile") && user?.role !== "user") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
