import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../testUtils/testUtils";
import Form from "./Form";

const labels = [
  "Name :",
  "Image url :",
  "Ingredients :",
  "Directions :",
  "Cooking time (minutes) :",
  "Difficulty :",
];

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    labels.forEach((label) => {
      test(`Then it should show a text field with the label text '${label}'`, () => {
        renderWithProviders(<Form buttonText="" />);

        const labelField = screen.getByLabelText(label);

        expect(labelField).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Add'", () => {
      const expectedButtonText = "Add";

      renderWithProviders(<Form buttonText={expectedButtonText} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });

  labels.slice(0, 4).forEach((label) => {
    describe(`When it is rendered and the user types a text 'test' on the field text '${label}'`, () => {
      test("Then it should show the text 'test' in the text field ", async () => {
        const fieldText = "test";

        renderWithProviders(<Form buttonText="" />);

        const labelField = screen.getByLabelText(label);
        await userEvent.type(labelField, fieldText);

        expect(labelField).toHaveValue(fieldText);
      });
    });
  });

  describe("When it is rendered and the user types a number '45' on the field 'Cooking time :'", () => {
    test("Then it should show the number '45' in the number field", async () => {
      const expectedTime = 45;

      renderWithProviders(<Form buttonText="" />);

      const cookingTimeField = screen.getByLabelText(labels[4]);
      await userEvent.type(cookingTimeField, expectedTime.toString());

      expect(cookingTimeField).toHaveValue(expectedTime);
    });
  });

  describe(`When it is rendered and the user selects the option 'Easy' on the field ${labels[5]}`, () => {
    test("Then it should show the text 'Easy' on the field", async () => {
      const expectedOption = "Easy";

      renderWithProviders(<Form buttonText="" />);

      const difficultyField = screen.getByLabelText(labels[5]);
      await userEvent.selectOptions(difficultyField, expectedOption);

      expect(difficultyField).toHaveValue(expectedOption);
    });
  });
});
