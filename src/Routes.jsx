import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[
        {
            path:'/',
            element:<Profile/>
        }
      ]
    },
  ]);

  export default router;