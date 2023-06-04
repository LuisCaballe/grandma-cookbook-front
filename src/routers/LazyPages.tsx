import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
export const LazyRecipesPage = lazy(
  () => import("../pages/RecipesPage/RecipesPage")
);
