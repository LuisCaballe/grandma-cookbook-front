import { mockRecipesList } from "../../mocks/recipeMocks";
import { loadRecipesActionCreator, recipeReducer } from "./recipeSlice";
import { RecipeStructure, RecipesState } from "./types";

describe("Given a recipeReducer reducer", () => {
  describe("When it receives an empty list of recipes and loadRecipes action with a collection of two recipes", () => {
    test("Then it should return a list with two recipes", () => {
      const currentRecipesState: RecipesState = {
        recipes: [],
      };

      const newRecipes: RecipeStructure[] = mockRecipesList;

      const expectedRecipesState: RecipesState = {
        recipes: newRecipes,
      };

      const loadRecipesAction = loadRecipesActionCreator(newRecipes);
      const newRecipesState = recipeReducer(
        currentRecipesState,
        loadRecipesAction
      );

      expect(newRecipesState).toStrictEqual(expectedRecipesState);
    });
  });
});
