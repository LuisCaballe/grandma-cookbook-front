import { Factory } from "fishery";
import { RecipeStructure } from "../../store/recipe/types";
import { faker } from "@faker-js/faker";

const difficultyWords = ["Easy", "Moderate", "Advanced"];
const randomNumber = faker.datatype.number({
  min: 0,
  max: difficultyWords.length - 1,
});

const recipeFactory = Factory.define<RecipeStructure>(() => ({
  name: faker.lorem.words(3),
  imageUrl: faker.image.url(),
  difficulty: difficultyWords[randomNumber],
  cookingTime: faker.number.int({ min: 10, max: 180 }),
  directions: faker.lorem.sentence(),
  id: faker.string.alphanumeric(10),
  ingredients: faker.lorem.sentence(),
  user: faker.string.alphanumeric(10),
}));

export const getRecipeMock = (data?: Partial<RecipeStructure>) => {
  return recipeFactory.build(data);
};

export const getRecipesListMock = (number: number, data?: RecipeStructure) => {
  return recipeFactory.buildList(number, data);
};
