import { useAppSelector } from "@/store/hooks";
import { Navigate, Outlet } from "react-router";

const PrivateRoutes = () => {
  const user = useAppSelector((state) => state.auth.user);
  const currentPath = window.location.pathname + window.location.search;
  const redirectTo = encodeURIComponent(currentPath);
  // [TODO]: Have to check logic is proper working on not.

  return user ? <Outlet /> : <Navigate to={`/login?redirect=${redirectTo}`} />;
};

export default PrivateRoutes;
