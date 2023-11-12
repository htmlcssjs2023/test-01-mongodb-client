import {
    createBrowserRouter,
  } from "react-router-dom";

import UpdateForm from "../components/UpdateForm/UpdateForm";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import Form from "../components/Form/Form";
import ShowUser from "../components/ShowUser/ShowUser";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,

      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/register",
          element: <Form></Form>,
        },
        {
          path: "/showUser",
          element: <ShowUser></ShowUser>,
          loader: () => fetch("http://localhost:5000/users"),
        },
        {
          path: "update/:id",
          element: <UpdateForm></UpdateForm>,
          loader: ({ params }) =>fetch(`http://localhost:5000/users/${params.id}`),
        },
      ],
    },
  ]);

  export default router;