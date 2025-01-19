import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import History from "../pages/History";
import CheckOut from "../pages/Checkout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Layout from "../layouts/Layout";

//Admin
import LayoutAdmin from "../layouts/LayoutAdmin";
import Dashboard from "../pages/admin/Dashboard";
import Category from "../pages/admin/Category";
import Products from "../pages/admin/Products";
import Manage from "../pages/admin/Manage";
import LayoutUser from "../layouts/LayoutUser";

//User
import HomeUser from "../pages/user/HomeUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "history", element: <History /> },
      { path: "checkout", element: <CheckOut /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    //Admin
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "category", element: <Category /> },
      { path: "product", element: <Products /> },
      { path: "manage", element: <Manage /> },
    ],
  },
  //User
  {
    path: "/user",
    element: <LayoutUser />,
    children: [{ index: true, element: <HomeUser /> }],
  },
]);

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;
