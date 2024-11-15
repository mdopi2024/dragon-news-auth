import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Auth from "../layouts/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "auth",
    element: <Auth></Auth>,
    children:[
      {
        path:'/auth/login',
        element:<h1>i m log in</h1>
      },
      {
        path:'/auth/register',
        element:<h1>i m register</h1>
      },
    ]
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
