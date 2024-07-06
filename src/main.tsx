import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { ThemeProvider } from "./components/providers/theme-provider.tsx";
import MainLayout from "./layouts/main-layout.tsx";
import LoginPage from "./plugins/auth/login.tsx";
import DashboardPage from "./plugins/dashboard/dashboard/page.tsx";
import TaskPage from "./plugins/dashboard/tasks/page.tsx";

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
        element: <div>TASK HAVE BEEN DONE HERE</div>,
      },
      {
        path: "trash-task",
        element: <div>TASK DELETE HERRE</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
