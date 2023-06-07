import { mockRecipesList } from "../../mocks/recipeMocks";
import {
  loadRecipesActionCreator,
  recipeReducer,
  removeRecipeActionCreator,
} from "./recipeSlice";
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

  describe("When it receives a current recipes state and a removeRecipe action with an id of a recipe", () => {
    test("Then it should return the list of recipes without the recipe with received id", () => {
      const currentRecipesState: RecipesState = {
        recipes: mockRecipesList,
      };
      const expectedRecipesState: RecipesState = {
        recipes: mockRecipesList.slice(1),
      };

      const newRecipesState = recipeReducer(
        currentRecipesState,
        removeRecipeActionCreator(mockRecipesList[0].id)
      );

      expect(newRecipesState).toStrictEqual(expectedRecipesState);
    });
  });
});
