import React from 'react';
import { Routes,Route,createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Example from "./components/Example";
import ErrorComponent from "./components/ErrorComponent";
import ProtectedRoute from "./components/ProtectedRoute";
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Dashboard />,
      index: true
    },
    {
      element: <ProtectedRoute/>,
      children: [
        {
          path: '/home',
          element: <Example />
        }
      ]
    },
    {
      path: '*',
      element: <p>404 Error - Nothing here...</p>
    }
  ]
);

export default router;