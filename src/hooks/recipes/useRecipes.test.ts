import { renderHook } from "@testing-library/react";
import useRecipes from "./useRecipes";
import { mockRecipesList } from "../../mocks/recipeMocks";
import { wrapperWithProvider } from "../../testUtils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

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
    test("Then it should resolve undefined", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getRecipes },
        },
      } = renderHook(() => useRecipes(), { wrapper: wrapperWithProvider });

      const getRecipesFunction = getRecipes();

      expect(getRecipesFunction).resolves.toBeUndefined();
    });
  });
});
