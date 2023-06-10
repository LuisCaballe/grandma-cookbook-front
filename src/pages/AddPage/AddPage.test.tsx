import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import AddPage from "./AddPage";
import RecipesPage from "../RecipesPage/RecipesPage";
import userEvent from "@testing-library/user-event";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

describe("Given an AddPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Add recipe'", () => {
      const expectedTitleText = "Add recipe";

      renderWithProviders(wrapWithRouter(<AddPage />));

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedTitleText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When the user submits the form with valid infromation ", () => {
    test("Then it should show a heading with the text 'Admin's recipes'", async () => {
      const labels = [
        "Name :",
        "Image url :",
        "Ingredients :",
        "Directions :",
        "Cooking time (minutes) :",
        "Difficulty :",
      ];
      const expectedHeadingText = "Admin's recipes";
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <AddPage />,
        },
        {
          path: "/home",
          element: <RecipesPage />,
        },
      ];
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        user: { id: "1", isLogged: true, name: "Admin", token: "1" },
      });

      const expectedTime = 45;
      const expectedOption = "Easy";
      const expectedTextExample = "test";
      const expectedImageUrl =
        "https://cdn.discordapp.com/attachments/1114233686947270749/1116128556259487804/gazpacho.webp";

      const nameField = screen.getByLabelText(labels[0]);
      const imageUrlField = screen.getByLabelText(labels[1]);
      const ingredientsField = screen.getByLabelText(labels[2]);
      const directionsField = screen.getByLabelText(labels[3]);
      const cookingTimeField = screen.getByLabelText(labels[4]);
      const difficultyField = screen.getByLabelText(labels[5]);

      await userEvent.type(nameField, expectedTextExample);
      await userEvent.type(imageUrlField, expectedImageUrl);
      await userEvent.type(ingredientsField, expectedTextExample);
      await userEvent.type(directionsField, expectedTextExample);
      await userEvent.selectOptions(difficultyField, expectedOption);
      await userEvent.type(cookingTimeField, expectedTime.toString());

      const button = screen.getByRole("button");

      await userEvent.click(button);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
