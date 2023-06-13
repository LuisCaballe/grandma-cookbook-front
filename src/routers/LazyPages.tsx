import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

export const LazyRecipesPage = lazy(
  () => import("../pages/RecipesPage/RecipesPage")
);

export const LazyNotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage")
);

export const LazyAddPage = lazy(() => import("../pages/AddPage/AddPage"));

export const LazyDetailPage = lazy(
  () => import("../pages/DetailPage/DetailPage")
);
