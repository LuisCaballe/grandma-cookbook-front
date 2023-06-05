import Feedback from "./Feedback";
import { renderWithProviders } from "../../testUtils/testUtils";
import { screen } from "@testing-library/react";

describe("Given a Feedback component", () => {
  describe("When it is rendered", () => {
    test("Then it should a container with an image and a parragraph", () => {
      const expectedLabelText = "feedback container";

      renderWithProviders(<Feedback />);
      const feedBackBox = screen.getByLabelText(expectedLabelText);

      expect(feedBackBox).toBeInTheDocument();
    });
  });
});
