import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const user = useSelector((state) => state.auth.user);
  const currentPath = window.location.pathname + window.location.search;
  const redirectTo = encodeURIComponent(currentPath);

  return user ? <Outlet /> : <Navigate to={`/login?redirect=${redirectTo}`} />;
};

export default PrivateRoute;
