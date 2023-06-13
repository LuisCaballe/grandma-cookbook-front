import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import {
  LazyAddPage,
  LazyDetailPage,
  LazyLoginPage,
  LazyNotFoundPage,
  LazyRecipesPage,
} from "./LazyPages";
import { Suspense } from "react";

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
      {
        path: "/home",
        element: (
          <Suspense>
            <LazyRecipesPage />
          </Suspense>
        ),
      },
      {
        path: "/add",
        element: (
          <Suspense>
            <LazyAddPage />
          </Suspense>
        ),
      },
      {
        path: "/:recipeId",
        element: (
          <Suspense>
            <LazyDetailPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense>
            <LazyNotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
