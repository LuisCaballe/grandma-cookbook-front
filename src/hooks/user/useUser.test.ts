import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { mockUserCredentials, tokenMock } from "../../mocks/userMocks";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { wrapperWithProvider } from "../../testUtils/testUtils";

describe("Given a useUser custom hook", () => {
  describe("When it calls the function getToken with a valid username and a password", () => {
    test("Then it should return a token", async () => {
      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapperWithProvider });

      const token = await getToken(mockUserCredentials);

      expect(token).toBe(tokenMock);
    });
  });

  describe("When it calls the function getToken with a wrong username and a wrong password", () => {
    test("Then it should return the response's method status with the message 'Wrong credentials. Please, try again'", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapperWithProvider });

      const getTokenFunction = getToken(mockUserCredentials);

      expect(getTokenFunction).resolves.toBeUndefined();
    });
  });
});
