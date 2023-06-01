import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import LoginForm from "./LoginForm";
import { renderWithProviders } from "../../testUtils/testUtils";
import { getCredentialsMock } from "../../factories/user/userFactory";

describe("Given a LoginForm component", () => {
  const mockOnSubmit = vi.fn();
  const usernameLabelText = "Username :";
  const passwordLabelText = "Password :";

  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Login'", () => {
      const expectedText = "Login";

      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a username and password input text field", () => {
      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const usernameLabel = screen.getByLabelText(usernameLabelText);
      const passwordLabel = screen.getByLabelText(passwordLabelText);

      expect(usernameLabel).toBeInTheDocument();
      expect(passwordLabel).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Login'", () => {
      const expectedText = "Login";

      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the username input and the password input are not empty", () => {
    test("Then the button should be enabled", async () => {
      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const button = screen.getByRole("button");

      await userEvent.type(screen.getByLabelText(usernameLabelText), "luis");
      await userEvent.type(screen.getByLabelText(passwordLabelText), "1234");

      expect(button).toBeEnabled();
    });
  });

  describe("When the username input and the password input are empty", () => {
    test("Then the button should be disabled", async () => {
      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });

  describe("When the user types 'Luis' in the username text field", () => {
    test("Then it should show 'Luis' in the username text field", async () => {
      const usernameInputText = "Luis";

      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const usernameTextField = screen.getByLabelText(usernameLabelText);

      await userEvent.type(usernameTextField, usernameInputText);

      expect(usernameTextField).toHaveValue(usernameInputText);
    });
  });

  describe("When the user types '1234' in the password text field", () => {
    test("Then it should show '1234' in the password text field", async () => {
      const passwordInputText = "1234";

      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const passwordTextField = screen.getByLabelText(passwordLabelText);

      await userEvent.type(passwordTextField, passwordInputText);

      expect(passwordTextField).toHaveValue(passwordInputText);
    });
  });

  describe("When the user types 'Luis' in the username text field and '1234' in the password text field and submits the form", () => {
    test("Then it should call de function actionOnSubmit with the user credentials", async () => {
      const mockCredentials = getCredentialsMock();

      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const usernameTextField = screen.getByLabelText(usernameLabelText);
      const passwordTextField = screen.getByLabelText(passwordLabelText);
      const button = screen.getByRole("button");

      await userEvent.type(usernameTextField, mockCredentials.username);
      await userEvent.type(passwordTextField, mockCredentials.password);
      await userEvent.click(button);

      expect(mockOnSubmit).toHaveBeenCalledWith(mockCredentials);
    });
  });
});
