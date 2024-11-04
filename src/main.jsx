import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Banner from "./components/Banner.jsx";
import Gadgets from "./components/Gadgets.jsx";
import Dashboard from "./components/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
