import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";

import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./components/providers/theme-provider.tsx";

import App from "./App.tsx";
import MainLayout from "./layouts/main-layout.tsx";
import LoginPage from "./plugins/auth/login.tsx";
import DashboardPage from "./plugins/dashboard/dashboard/page.tsx";
import TaskPage from "./plugins/dashboard/tasks/components/page.tsx";
import CompletedPageContainer from "./plugins/dashboard/completed/components/index.tsx";
import TrashPageContainer from "./plugins/dashboard/trash/components/index.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "auth/login",
    element: <LoginPage />,
  },
  {
    path: "dashboard",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "tasks",
        element: <TaskPage />,
      },
      {
        path: "completed-task",
        element: <CompletedPageContainer />
      },
      {
        path: "trash-task",
        element: <TrashPageContainer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilNexus />
      <ToastContainer />
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
