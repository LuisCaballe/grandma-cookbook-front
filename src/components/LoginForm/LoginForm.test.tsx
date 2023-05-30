import { screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Login'", () => {
      const expectedText = "Login";

      renderWithProviders(<LoginForm />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a username and password input text field", () => {
      const usernameLabelText = "Username :";
      const passwordLabelText = "Password :";

      renderWithProviders(<LoginForm />);

      const usernameLabel = screen.getByLabelText(usernameLabelText);
      const passwordLabel = screen.getByLabelText(passwordLabelText);

      expect(usernameLabel).toBeInTheDocument();
      expect(passwordLabel).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Login'", () => {
      const expectedText = "Login";

      renderWithProviders(<LoginForm />);

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
