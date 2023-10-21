import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../views/Home";
import Category from "../views/Category";
import Layout from "../components/Layout";
import RegisterAdmin from "../views/RegisterAdmin";
import Login from "../views/Login";
import AddFood from "../views/AddFood";
import AddCategory from "../views/AddCategory";
import EditFood from "../views/EditFood";
import EditCategory from "../views/EditCategory";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.access_token) {
        throw redirect("/");
      }
      return null;
    },
  },

  {
    element: <Layout />,
    loader: () => {
      if (!localStorage.access_token) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/addCategory",
        element: <AddCategory />,
      },
      {
        path: "/addAdmin",
        element: <RegisterAdmin />,
      },
      {
        path: "/addFood",
        element: <AddFood />,
      },
      {
        path: "/editFood/:id",
        element: <EditFood />,
      },
      {
        path: "/editCategory/:id",
        element: <EditCategory />,
      },
    ],
  },
]);
export default router;
