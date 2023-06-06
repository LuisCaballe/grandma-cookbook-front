import { renderHook, screen } from "@testing-library/react";
import useRecipes from "./useRecipes";
import { mockRecipesList } from "../../mocks/recipeMocks";
import {
  renderWithProviders,
  wrapperWithProvider,
} from "../../testUtils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import App from "../../components/App/App";

describe("Given a getRecipes function", () => {
  describe("When it is called with a valid token", () => {
    test("Then it should return a list with two recipes", async () => {
      const {
        result: {
          current: { getRecipes },
        },
      } = renderHook(() => useRecipes(), { wrapper: wrapperWithProvider });

      const recipesList = await getRecipes();

      expect(recipesList).toStrictEqual(mockRecipesList);
    });
  });

  describe("When it receives a invalid token", () => {
    test("Then it should show a modal with a icon with the alternative text 'error icon'", async () => {
      server.resetHandlers(...errorHandlers);
      const expectedAltText = "error icon";
      const {
        result: {
          current: { getRecipes },
        },
      } = renderHook(() => useRecipes(), { wrapper: wrapperWithProvider });
      const routes: RouteObject[] = [{ path: "/", element: <App /> }];
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);
      await getRecipes();
      const icon = screen.getByAltText(expectedAltText);

      expect(icon).toBeInTheDocument();
    });
  });
});
