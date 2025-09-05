import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/home/Home";
import NotFound from "@/pages/notFound/NotFound";
import Profile from "@/pages/profile/Profile";
import type { ReactElement } from "react";

export interface IRouteConfig {
  path?: string;
  element: ReactElement;
  index?: boolean;
  children?: IRouteConfig[];
}

export const routes: IRouteConfig[] = [
  {
    path: "/",
    element: <AppLayout />,
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
    path: "*",
    element: <NotFound />,
  },
];
