// index.jsx
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from "./App";
import Pravidla from "./pages/Pravidla";
import AdminTeam from "./pages/AdminTeam";
import Faq from "./pages/Faq";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },  
  {
    path: "/pravidla",
    element: <Pravidla />,
    
  },
  {
    path: "/adminteam",
    element: <AdminTeam />,
    
  },  {
    path: "/faq",
    element: <Faq />,
    
  },

]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);