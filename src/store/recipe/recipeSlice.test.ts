import { mockRecipesList } from "../../mocks/recipeMocks";
import {
  addRecipeActionCreator,
  loadRecipesActionCreator,
  loadSelectedRecipeActionCreator,
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
        removeRecipeActionCreator(mockRecipesList[0].id as string)
      );

      expect(newRecipesState).toStrictEqual(expectedRecipesState);
    });
  });

  describe("When it receives a current recipes state and a addRecipe action with a new recipe", () => {
    test("Then it should return the list of recipes with the new recipe", () => {
      const currentRecipesState: RecipesState = {
        recipes: [mockRecipesList[0]],
      };

      const newRecipesState = recipeReducer(
        currentRecipesState,
        addRecipeActionCreator(mockRecipesList[1])
      );

      expect(newRecipesState).toStrictEqual({ recipes: mockRecipesList });
    });
  });

  describe("When it receives a current recipes state and a loadSelectedRecipe action with an id of a recipe", () => {
    test("Then it should return the list of recipes and the id of the selected recipe", () => {
      const currentRecipesState: RecipesState = {
        recipes: mockRecipesList,
      };
      const expectedRecipesState: RecipesState = {
        recipes: mockRecipesList,
        selectedRecipe: mockRecipesList[0],
      };

      const newRecipesState = recipeReducer(
        currentRecipesState,
        loadSelectedRecipeActionCreator(mockRecipesList[0])
      );

      expect(newRecipesState).toStrictEqual(expectedRecipesState);
    });
  });
});
