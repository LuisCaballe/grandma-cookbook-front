export interface RecipeStructure {
  name: string;
  imageUrl: string;
  ingredients: string;
  directions: string;
  difficulty: string;
  cookingTime: number;
  user?: string;
  id?: string;
}

export interface RecipesState {
  recipes: RecipeStructure[];
  totalRecipes: number;
  selectedRecipe?: RecipeStructure;
  filter?: string;
}

export interface RecipeStateResponse extends RecipesState {
  totalRecipes: number;
}
