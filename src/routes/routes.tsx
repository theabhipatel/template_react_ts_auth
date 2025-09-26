import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/home/Home";
import NotFound from "@/pages/notFound/NotFound";
import Profile from "@/pages/profile/Profile";
import Login from "@/pages/login/Login";
import Signup from "@/pages/signup/Signup";
import type { ReactElement } from "react";
import PrivateRoutes from "@/hoc/PrivateRoutes";

export interface IRouteConfig {
  path?: string;
  element: ReactElement;
  index?: boolean;
  children?: IRouteConfig[];
}

export const routes: IRouteConfig[] = [
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <AppLayout />
      </PrivateRoutes>
    ), // [🟨TODO]: Have to fix this issue
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
