import { createBrowserRouter } from "react-router-dom";

import Home from "../view/Home";
import Abouti from "../view/Abouti";
import Project from "../view/Project";
import Setting from "../view/Setting";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        path: "/about",
        element: <Abouti />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
]);

export default router;
