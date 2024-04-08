import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SinglePages from "../Pages/SinglePages";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts/>,
      children: [
        {
            path: '/',
            element: <Home/>,
            loader: ()=> fetch('/data/news.json')
        },
        {
          path: "/singlePage/:id",
          element: <SinglePages/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        }
      ]
    },
  ]);