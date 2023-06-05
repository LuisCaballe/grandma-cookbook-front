import { renderHook } from "@testing-library/react";
import useRecipes from "./useRecipes";
import { mockRecipesList } from "../../mocks/recipeMocks";
import { wrapperWithProvider } from "../../testUtils/testUtils";

describe("Given a getRecipes function", () => {
  describe("When it is called", () => {
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
});
