import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import { LazyLoginPage } from "./LazyPages";
import { Suspense } from "react";
import RecipesPage from "../pages/RecipesPage/RecipesPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      {
        path: "/login",
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      { path: "/home", element: <RecipesPage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
