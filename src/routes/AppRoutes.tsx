import { Routes, Route } from "react-router";
import { routes, type IRouteConfig } from "./routes";
import { useDispatch } from "react-redux";
import { clearAuth } from "@/store/features/auth/authSlice";
import { initializeResInterceptor } from "@/utils/axiosClient";

const renderRoutes = (routes: IRouteConfig[]): React.ReactNode =>
  routes.map(({ path, element, index, children }, key) => {
    if (index) {
      return <Route key={`index-${key}`} index element={element} />;
    }
    return (
      <Route key={`path-${key}`} path={path} element={element}>
        {children && renderRoutes(children)}
      </Route>
    );
  });

const AppRouter = () => {
  const dispatch = useDispatch();

  const handleClearAuthUser = () => {
    dispatch(clearAuth());
  };

  /** ---> initializing axios interceptor. */
  initializeResInterceptor(handleClearAuthUser);

  // [TODO]: Have to put Private route hoc to protect authenticated routes.
  return <Routes>{renderRoutes(routes)}</Routes>;
};

export default AppRouter;
