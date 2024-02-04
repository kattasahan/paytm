import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/auth/SignUp.jsx";
import Dashboard from "./pages/signined/Dashboard.jsx";
import SignIn from "./pages/auth/SignIn.jsx";
import SendMoney from "./pages/signined/SendMoney.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/send", element: <SendMoney /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
