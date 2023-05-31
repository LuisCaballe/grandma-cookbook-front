import { lazy } from "react";

export const LazyLoginPage = lazy(
  () => import("../components/pages/LoginPage/LoginPage")
);
