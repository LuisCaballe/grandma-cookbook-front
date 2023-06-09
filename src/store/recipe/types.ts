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
}
