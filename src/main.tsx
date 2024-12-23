import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Login } from "./pages/auth/login";
import { Dashboard } from "./pages/dashboard";

import { Layout } from "./pages/layout";
import { RecoilRoot } from "recoil";

export const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={Router} />
    </RecoilRoot>
  </StrictMode>
);
