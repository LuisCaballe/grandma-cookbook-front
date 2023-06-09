import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipesState, RecipeStructure } from "./types";

const initialRecipesState: RecipesState = {
  recipes: [],
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState: initialRecipesState,
  reducers: {
    loadRecipes: (
      currentRecipesState: RecipesState,
      action: PayloadAction<RecipeStructure[]>
    ): RecipesState => ({
      ...currentRecipesState,
      recipes: action.payload,
    }),

    removeRecipe: (
      currentRecipesState: RecipesState,
      action: PayloadAction<string>
    ): RecipesState => ({
      ...currentRecipesState,
      recipes: currentRecipesState.recipes.filter(
        (recipe) => recipe.id !== action.payload
      ),
    }),

    addRecipe: (
      currentRecipesState: RecipesState,
      action: PayloadAction<RecipeStructure>
    ): RecipesState => ({
      ...currentRecipesState,
      recipes: [...currentRecipesState.recipes, action.payload],
    }),
  },
});

export const {
  loadRecipes: loadRecipesActionCreator,
  removeRecipe: removeRecipeActionCreator,
  addRecipe: addRecipeActionCreator,
} = recipeSlice.actions;

export const recipeReducer = recipeSlice.reducer;
