import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import CaseSheet from "./components/CaseSheet";
import Auth from "./components/Auth";
import Rooms from "./components/Rooms";
import Gallery from "./components/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Gallery",
        element: <Gallery />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Auth",
        element: <Auth />,
      },
      {
        path: "Rooms",
        element: <Rooms />,
      },
      {
        path: "CaseSheet",
        element: <CaseSheet />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
