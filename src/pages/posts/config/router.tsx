import { RouteObject } from "react-router-dom";
import { MdArticle } from "react-icons/md";
import Posts from "../pages/index/Posts";
import Post from "../pages/post/Post";
import EditPost from "../pages/edit/EditPost";

const router: RouteObject = {
  path: "/posts",

  children: [
    {
      index: true,
      element: <Posts />,
    },
    {
      path: ":id",
      element: <Post />,
    },
    {
      path: "edit/:id",
      element: <EditPost />,
    },
  ],
};

const menu: MenuRoute = {
  path: "/posts",
  icon: <MdArticle />,
  children: [],
  title: "Posts",
};

const paths = {
  root: "/posts",
};

export const postsConfig = { router, menu, paths };
