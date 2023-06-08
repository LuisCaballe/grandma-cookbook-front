import { rest } from "msw";
import { tokenMock } from "./userMocks";
import { mockRecipesList } from "./recipeMocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}/recipes`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ recipes: mockRecipesList }));
  }),

  rest.delete(
    `${apiUrl}/recipes/${mockRecipesList[0].id}`,
    (_req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
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
];
