import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/home/Home";
import NotFound from "@/pages/notFound/NotFound";
import Profile from "@/pages/profile/Profile";
import Singin from "@/pages/signin/Singin";
import Singup from "@/pages/signup/Singup";
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
    path: "/signin",
    element: <Singin />,
  },
  {
    path: "/signup",
    element: <Singup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
