import { renderHook, screen } from "@testing-library/react";
import useRecipes from "./useRecipes";
import { mockRecipesList } from "../../mocks/recipeMocks";
import {
  renderWithProviders,
  wrapperWithProvider,
  wrapWithRouter,
} from "../../testUtils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers, handlers } from "../../mocks/handlers";
import { vi } from "vitest";
import Layout from "../../components/Layout/Layout";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a getRecipes function", () => {
  describe("When it is called with a valid token", () => {
    test("Then it should return a list with two recipes", async () => {
      server.resetHandlers(...handlers);

      const {
        result: {
          current: { getRecipes },
        },
      } = renderHook(() => useRecipes(), { wrapper: wrapperWithProvider });

      const recipesList = await getRecipes();

      expect(recipesList).toStrictEqual(mockRecipesList);
    });
  });

  describe("When it receives a invalid token", () => {
    test("Then it should show a modal with a icon with the alternative text 'error icon'", async () => {
      server.resetHandlers(...errorHandlers);
      const expectedAltText = "error icon";

      const {
        result: {
          current: { getRecipes },
        },
      } = renderHook(() => useRecipes(), { wrapper: wrapperWithProvider });

      renderWithProviders(wrapWithRouter(<Layout />));

      await getRecipes();
      const icon = screen.getByAltText(expectedAltText);

      expect(icon).toBeInTheDocument();
    });
  });
});

describe("Given a removeRecipe function", () => {
  describe("When it is invoked with an existing id recipe", () => {
    test("Then it should return as response as true", async () => {
      server.resetHandlers(...handlers);

      const {
        result: {
          current: { removeRecipe },
        },
      } = renderHook(() => useRecipes(), { wrapper: wrapperWithProvider });

      renderWithProviders(wrapWithRouter(<Layout />));

      await removeRecipe(mockRecipesList[0].id as string);
      const successIcon = screen.getByAltText("success icon");

      expect(successIcon).toBeInTheDocument();
    });
  });

  describe("when it is invoked with an invalid id recipe", () => {
    test("Then it should show to the user a feedback message with an error", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { removeRecipe },
        },
      } = renderHook(() => useRecipes(), {
        wrapper: wrapperWithProvider,
      });

      renderWithProviders(wrapWithRouter(<Layout />));

      await removeRecipe(mockRecipesList[0].id as string);
      const errorIcon = screen.getByAltText("error icon");

      expect(errorIcon).toBeInTheDocument();
    });
  });
});

describe("Given a addRecipe function", () => {
  describe("When it is invoked and there is an error", () => {
    test("Then it should show to the user a feedback message with an error", async () => {
      server.resetHandlers(...errorHandlers);
      const {
        result: {
          current: { addRecipe },
        },
      } = renderHook(() => useRecipes(), {
        wrapper: wrapperWithProvider,
      });

      renderWithProviders(wrapWithRouter(<Layout />));

      await addRecipe(mockRecipesList[0]);

      const errorIcon = screen.getByAltText("error icon");

      expect(errorIcon).toBeInTheDocument();
    });
  });
});
