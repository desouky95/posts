import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import { postsConfig } from "@src/pages/posts/config/router";
import { RiHome6Line } from "react-icons/ri";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [postsConfig.router],
  },
]);

export default router;

export const routesMenu: Array<MenuRoute> = [
  {
    path: "/",
    title: "Dashboard",
    icon: <RiHome6Line />,
    children: [],
  },
  postsConfig.menu,
];
