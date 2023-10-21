import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Menu from "../views/Menu";
import Detail from "../views/Detail";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);
export default router;
