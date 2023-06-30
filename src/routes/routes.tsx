import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import GameDetailpage from "../pages/GameDetailpage";
import ErrorPage from "../errors/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailpage /> },
    ],
  },
]);

export default router;
