import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../testUtils/testUtils";
import Form from "./Form";
import { vi } from "vitest";
import { mockRecipesList } from "../../mocks/recipeMocks";

const labels = [
  "Name :",
  "Image url :",
  "Ingredients :",
  "Directions :",
  "Cooking time (minutes) :",
  "Difficulty :",
];

const actionOnSubmit = vi.fn();

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    labels.forEach((label) => {
      test(`Then it should show a text field with the label text '${label}'`, () => {
        renderWithProviders(
          <Form buttonText="" actionOnSubmit={actionOnSubmit} />
        );

        const labelField = screen.getByLabelText(label);

        expect(labelField).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Add'", () => {
      const expectedButtonText = "Add";

      renderWithProviders(
        <Form buttonText={expectedButtonText} actionOnSubmit={actionOnSubmit} />
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe(`When it is rendered and the user types a text 'test' on a text field`, () => {
    labels.slice(0, 4).forEach((label) => {
      test("Then it should show the text 'test' in the text field", async () => {
        const fieldText = "test";

        renderWithProviders(
          <Form buttonText="" actionOnSubmit={actionOnSubmit} />
        );
        const labelField = screen.getByLabelText(label);
        await userEvent.type(labelField, fieldText);

        expect(labelField).toHaveValue(fieldText);
      });
    });
  });

  describe("When it is rendered and the user types a number '45' on the field 'Cooking time :'", () => {
    test("Then it should show the number '45' in the number field", async () => {
      const expectedTime = 45;

      renderWithProviders(
        <Form buttonText="" actionOnSubmit={actionOnSubmit} />
      );

      const cookingTimeField = screen.getByLabelText(labels[4]);
      await userEvent.type(cookingTimeField, expectedTime.toString());

      expect(cookingTimeField).toHaveValue(expectedTime);
    });
  });

  describe(`When it is rendered and the user selects the option 'Easy' on the field ${labels[5]}`, () => {
    test("Then it should show the text 'Easy' on the field", async () => {
      const expectedOption = "Easy";

      renderWithProviders(
        <Form buttonText="" actionOnSubmit={actionOnSubmit} />
      );

      const difficultyField = screen.getByLabelText(labels[5]);
      await userEvent.selectOptions(difficultyField, expectedOption);

      expect(difficultyField).toHaveValue(expectedOption);
    });
  });

  describe("When it is rendered and the inputs fields are empty", () => {
    test("Then the button should be disabled", () => {
      renderWithProviders(
        <Form buttonText="Add" actionOnSubmit={actionOnSubmit} />
      );

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });

  describe("When it is rendered and the user fills in all the fields of the form", () => {
    test("Then the button should be enabled", async () => {
      renderWithProviders(
        <Form buttonText="Add" actionOnSubmit={actionOnSubmit} />
      );

      const button = screen.getByRole("button");

      const expectedTime = 45;
      const expectedOption = "Easy";
      const expectedTextExample = "test";

      const nameField = screen.getByLabelText(labels[0]);
      const imageUrlField = screen.getByLabelText(labels[1]);
      const ingredientsField = screen.getByLabelText(labels[2]);
      const directionsField = screen.getByLabelText(labels[3]);
      const cookingTimeField = screen.getByLabelText(labels[4]);
      const difficultyField = screen.getByLabelText(labels[5]);

      await userEvent.type(nameField, expectedTextExample);
      await userEvent.type(imageUrlField, expectedTextExample);
      await userEvent.type(ingredientsField, expectedTextExample);
      await userEvent.type(directionsField, expectedTextExample);
      await userEvent.selectOptions(difficultyField, expectedOption);
      await userEvent.type(cookingTimeField, expectedTime.toString());

      expect(button).toBeEnabled();
    });
  });

  describe("When it is rendered and the user fills in all the fields of the form and clicks on the button", () => {
    test("Then the handleSubmit function should be called", async () => {
      renderWithProviders(
        <Form buttonText="Add" actionOnSubmit={actionOnSubmit} />
      );

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

      expect(actionOnSubmit).toHaveBeenCalled();
    });
  });

  describe("When it is rendered and there is an existing selected recipe ready to be updated", () => {
    test("Then all the fields of the form should be filled with the initial data of the selected recipe", async () => {
      renderWithProviders(
        <Form buttonText="Update" actionOnSubmit={actionOnSubmit} />,
        {
          recipe: {
            recipes: mockRecipesList,
            totalRecipes: mockRecipesList.length,
            selectedRecipe: mockRecipesList[0],
          },
        }
      );
      const labelField = screen.getByLabelText("Name :");

      expect(labelField).toHaveValue(mockRecipesList[0].name);
    });
  });
});
