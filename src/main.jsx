import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Banner from "./components/Banner.jsx";
import Gadgets from "./components/Gadgets.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Blogs from "./components/Blogs.jsx";
import BlogDetails from "./components/BlogDetails.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Banner></Banner>
            <Gadgets></Gadgets>
          </div>
        ),
      },
      {
        path: "details/:id",
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch("/tech.json"),
      },
    ],
  },
  {
    path: "/statistics",
    element: <App></App>,
    children: [
      {
        path: "/statistics",
        element: <h2>No data to show</h2>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <App></App>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
  {
    path: "/blogs",
    element: <App></App>,
    children: [
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("/blogs.json"),
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails></BlogDetails>,
        loader: () => fetch("/blogs.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
