import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./routes/home/Home"));
const SinglePost = lazy(() => import("./routes/post/SinglePost"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: "/post/:id",
    element: <SinglePost />,
  },
]);

export default router;