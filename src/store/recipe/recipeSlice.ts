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
  },
});

export const { loadRecipes: loadRecipesActionCreator } = recipeSlice.actions;
export const recipeReducer = recipeSlice.reducer;
