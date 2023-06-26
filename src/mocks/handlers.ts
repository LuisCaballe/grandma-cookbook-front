import { rest } from "msw";
import { tokenMock } from "./userMocks";
import { mockRecipesList } from "./recipeMocks";
import { getRecipesListMock } from "../factories/recipe/recipeFactory";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}/recipes`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ recipes: mockRecipesList, totalRecipes: 2 })
    );
  }),

  rest.delete(
    `${apiUrl}/recipes/${mockRecipesList[0].id}`,
    (_req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),

  rest.post(`${apiUrl}/recipes/add`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ recipe: mockRecipesList[0] }));
  }),

  rest.get(`${apiUrl}/recipes/:recipeId`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ recipeById: mockRecipesList[0] }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${apiUrl}/recipes`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(
    `${apiUrl}/recipes/${mockRecipesList[0].id}`,
    (_req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),

  rest.post(`${apiUrl}/recipes/add`, (_req, res, ctx) => {
    return res(ctx.status(400));
  }),

  rest.get(`${apiUrl}/recipes/${mockRecipesList[0].id}`, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),
];

export const mockTwelveRecipes = getRecipesListMock(12);

export const paginationHandlers = [
  rest.get(`${apiUrl}/recipes`, (req, res, ctx) => {
    const searchParams = req.url.searchParams;
    searchParams.set("skip", "0");
    searchParams.set("limit", "5");

    return res(
      ctx.status(200),
      ctx.json({
        recipes: mockTwelveRecipes,
        totalRecipes: mockTwelveRecipes.length,
      })
    );
  }),
];
