import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text 'Grandma's Cookbook's logo'", () => {
      const expectedAlternativeText = "Grandma's Cookbook's logo";

      renderWithProviders(wrapWithRouter(<Layout />));
      const image = screen.getByRole("img", { name: expectedAlternativeText });

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it is loading recipes", () => {
    test("Then it should show render the Loader component", () => {
      const expectedLabelText = "loading spinner";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: {
          isLoading: true,
          feedbackData: {
            isError: false,
            message: "",
            showFeedback: false,
          },
          paginationData: {
            page: 1,
            skip: 0,
          },
        },
      });
      const loader = screen.getByLabelText(expectedLabelText);

      expect(loader).toBeInTheDocument();
    });
  });

  describe("When it is rendered and there is a message in the UI store", () => {
    test("Then it should a modal with a button with 'Close' text in it", () => {
      const expectedTextButton = "Close";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: {
          isLoading: false,
          feedbackData: {
            isError: true,
            message: "Wrong credentials",
            showFeedback: true,
          },
          paginationData: {
            page: 1,
            skip: 0,
          },
        },
      });
      const closeButton = screen.getByRole("button", {
        name: expectedTextButton,
      });

      expect(closeButton).toBeInTheDocument();
    });
  });
});
