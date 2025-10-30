import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import AppLayout from "./Layouts/AppLayout";
import IncidentList from "./routes/IncidentList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // ✅ layout หลัก
    children: [
      { index: true, element: <Home /> },
      { path: "incident", element: <IncidentList /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}