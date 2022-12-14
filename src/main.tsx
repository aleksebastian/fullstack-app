import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorPage from "./ErrorPage";
// import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
