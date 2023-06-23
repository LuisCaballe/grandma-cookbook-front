import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipesState, RecipeStructure } from "./types";

const initialRecipesState: RecipesState = {
  recipes: [],
  totalRecipes: 0,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState: initialRecipesState,
  reducers: {
    loadRecipes: (
      currentRecipesState: RecipesState,
      action: PayloadAction<{
        recipes: RecipeStructure[];
        totalRecipes: number;
      }>
    ): RecipesState => ({
      ...currentRecipesState,
      recipes: action.payload.recipes,
      totalRecipes: action.payload.totalRecipes,
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

    loadSelectedRecipe: (
      currentRecipesState: RecipesState,
      action: PayloadAction<RecipeStructure>
    ): RecipesState => ({
      ...currentRecipesState,
      selectedRecipe: action.payload,
    }),
  },
});

export const {
  loadRecipes: loadRecipesActionCreator,
  removeRecipe: removeRecipeActionCreator,
  addRecipe: addRecipeActionCreator,
  loadSelectedRecipe: loadSelectedRecipeActionCreator,
} = recipeSlice.actions;

export const recipeReducer = recipeSlice.reducer;
