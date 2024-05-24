import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Conponents/Root/Root";
import Home from "./Conponents/Home/Home";
import Contact from "./Conponents/Contact/Contact";
import Dashboard from "./Conponents/Dashboard/Dashboard";
import Profile from "./Conponents/Profile/Profile";
import Longin from "./Conponents/Longin/Longin";
import Register from "./Conponents/Register/Register";
import PrivateRoute from "./Conponents/PrivateRoute/PrivateRoute";
import AuthProvider from "./AuthProvider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Longin></Longin>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>,
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
