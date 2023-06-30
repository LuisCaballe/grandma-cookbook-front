import { RecipeStructure } from "../store/recipe/types";

export const mockRecipesList: RecipeStructure[] = [
  {
    id: "647100635a615cd9e3388cab",
    name: "Fried egg",
    imageUrl:
      "https://i.blogs.es/b9b3c5/huevos-fritos-en-abundante-aceite/1366_2000.jpg",
    cookingTime: 10,
    difficulty: "Easy",
    directions: "Just fry a egg",
    ingredients: "Oil, egg",
    user: "646fa0775a615cd9e3388ca9",
  },
  {
    id: "647102745a615cd9e3388cae",
    name: "Boiled egg",
    imageUrl:
      "https://cdn.elcocinerocasero.com/imagen/receta/1000/2021-06-17-12-54-08/como-cocer-huevos.jpeg",
    cookingTime: 10,
    difficulty: "Moderate",
    directions: "Just boil a egg",
    ingredients: "Water, egg",
    user: "646fa0775a615cd9e3388ca9",
  },
];
