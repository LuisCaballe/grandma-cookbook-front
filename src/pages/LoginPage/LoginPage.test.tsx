import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import userEvent from "@testing-library/user-event";
import LoginPage from "./LoginPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { UserDataCredentials } from "../../types";
import RecipesPage from "../RecipesPage/RecipesPage";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test(
      "Then it should show an image with the alternative text 'Illustration of cooking ingredients'"
    );
    const expectedAlternativeText = "Illustration of cooking ingredients";

    renderWithProviders(wrapWithRouter(<LoginPage />));

    const image = screen.getByRole("img", { name: expectedAlternativeText });

    expect(image).toBeInTheDocument();
  });

  describe("When the user submits the form with a valid credentials", () => {
    test("Then it should show a heading with the text 'Admin's recipes'", async () => {
      const expectedHeadingText = "Admin's recipes";
      const mockUser: UserDataCredentials = {
        username: "admin",
        password: "admin",
      };
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <LoginPage />,
        },
        {
          path: "/home",
          element: <RecipesPage />,
        },
      ];
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        user: { name: "Admin", id: "1", token: "1", isLogged: true },
      });

      const usernameLabelText = "Username :";
      const passwordLabelText = "Password :";
      const usernameTextField = screen.getByLabelText(usernameLabelText);
      const passwordTextField = screen.getByLabelText(passwordLabelText);
      const button = screen.getByRole("button", { name: "Login" });

      await userEvent.type(usernameTextField, mockUser.username);
      await userEvent.type(passwordTextField, mockUser.password);
      await userEvent.click(button);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
