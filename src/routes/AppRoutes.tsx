import { Routes, Route } from "react-router";
import { routes, type IRouteConfig } from "./routes";

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
  return <Routes>{renderRoutes(routes)}</Routes>;
};

export default AppRouter;
