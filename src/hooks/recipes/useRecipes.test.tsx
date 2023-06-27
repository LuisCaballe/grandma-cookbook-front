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
import { act } from "react-dom/test-utils";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a getRecipes function", () => {
  const skip = 3;
  describe("When it is called with a valid token", () => {
    test("Then it should return a list with two recipes", async () => {
      server.resetHandlers(...handlers);

      const {
        result: {
          current: { getRecipes },
        },
      } = renderHook(() => useRecipes(), { wrapper: wrapperWithProvider });

      await act(async () => {
        const recipeState = await getRecipes(skip);

        const recipesList = recipeState?.recipes;

        expect(recipesList).toStrictEqual(mockRecipesList);
      });
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

      await act(async () => {
        await getRecipes(skip);
      });
      const icon = screen.getByAltText(expectedAltText);

      expect(icon).toBeInTheDocument();
    });
  });
});

describe("Given a removeRecipe function", () => {
  describe("When it is invoked with an existing id recipe", () => {
    test("Then it should show a modal as the recipe has been removed successfully", async () => {
      server.resetHandlers(...handlers);

      const {
        result: {
          current: { removeRecipe },
        },
      } = renderHook(() => useRecipes(), { wrapper: wrapperWithProvider });

      renderWithProviders(wrapWithRouter(<Layout />));

      await act(async () => {
        await removeRecipe(mockRecipesList[0].id as string);
      });
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

      await act(async () => {
        await removeRecipe(mockRecipesList[0].id as string);
      });
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

      await act(async () => {
        await addRecipe(mockRecipesList[0]);
      });

      const errorIcon = screen.getByAltText("error icon");

      expect(errorIcon).toBeInTheDocument();
    });
  });
});

describe("Given a getSelectedRecipe function", () => {
  describe("When it is invoked with an existing id recipe", () => {
    test("Then it should return a recipe with the selected id", async () => {
      server.resetHandlers(...handlers);
      const expectedRecipe = mockRecipesList[0];

      const {
        result: {
          current: { getSelectedRecipe },
        },
      } = renderHook(() => useRecipes(), { wrapper: wrapperWithProvider });

      await act(async () => {
        const selectedRecipe = await getSelectedRecipe(
          mockRecipesList[0].id as string
        );

        expect(selectedRecipe).toStrictEqual(expectedRecipe);
      });
    });
  });

  describe("when it is invoked with an invalid id recipe", () => {
    test("Then it should show to the user a feedback message with an error", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getSelectedRecipe },
        },
      } = renderHook(() => useRecipes(), {
        wrapper: wrapperWithProvider,
      });

      renderWithProviders(wrapWithRouter(<Layout />));

      await act(async () => {
        await getSelectedRecipe(mockRecipesList[0].id as string);
      });
      const errorIcon = screen.getByAltText("error icon");

      expect(errorIcon).toBeInTheDocument();
    });
  });
});

describe("Given an updateRecipe function", () => {
  describe("When it is invoked with an existing recipe id and a updated recipe data", () => {
    test("Then it should show a modal as the recipe has been updated successfully", async () => {
      server.resetHandlers(...handlers);

      const {
        result: {
          current: { updateRecipe },
        },
      } = renderHook(() => useRecipes(), { wrapper: wrapperWithProvider });

      renderWithProviders(wrapWithRouter(<Layout />));

      await act(async () => {
        await updateRecipe(mockRecipesList[0].id as string, mockRecipesList[0]);
      });
      const successIcon = screen.getByAltText("success icon");

      expect(successIcon).toBeInTheDocument();
    });
  });

  describe("When it is invoked with an invalid recipe id or an invalid updated recipe data", () => {
    test("Then it should show a modal as there has been and error updating th recipe", async () => {
      server.resetHandlers(...errorHandlers);
      const {
        result: {
          current: { updateRecipe },
        },
      } = renderHook(() => useRecipes(), { wrapper: wrapperWithProvider });

      renderWithProviders(wrapWithRouter(<Layout />));

      await act(async () => {
        await updateRecipe(mockRecipesList[0].id as string, mockRecipesList[0]);
      });

      const errorIcon = screen.getByAltText("error icon");

      expect(errorIcon).toBeInTheDocument();
    });
  });
});
