import Feedback from "./Feedback";
import { renderWithProviders } from "../../testUtils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { store } from "../../store";

describe("Given a Feedback component", () => {
  describe("When it is rendered", () => {
    test("Then it should a container with an image and a parragraph", () => {
      const expectedLabelText = "feedback container";

      renderWithProviders(<Feedback />);
      const feedBackBox = screen.getByLabelText(expectedLabelText);

      expect(feedBackBox).toBeInTheDocument();
    });

    test("Then it should show a button and when the user clicks on it, the message of the UI state should set to empty ", async () => {
      const textButton = "Close";

      renderWithProviders(<Feedback />, {
        ui: {
          isLoading: false,
          feedbackData: {
            isError: true,
            message: "Wrong credentials",
            showFeedback: true,
          },
        },
      });

      const closeButton = screen.getByRole("button", { name: textButton });

      await userEvent.click(closeButton);

      const testStore = store.getState();

      expect(testStore.ui.feedbackData.message).toBeFalsy();
    });
  });
});
