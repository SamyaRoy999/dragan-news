import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts/>,
      children: [
        {
            path: '/',
            element: <Home/>
        }
      ]
    },
  ]);