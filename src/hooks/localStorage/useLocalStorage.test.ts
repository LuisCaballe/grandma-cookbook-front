import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";
import { tokenMock } from "../../mocks/userMocks";

describe("Given a useLocalStorage custom hook", () => {
  describe("When is called its function setToken with a token", () => {
    test("Then it should save a token in local storage", () => {
      const key = "token";

      const {
        result: {
          current: { setToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, tokenMock);

      expect(localStorage.getItem(key)).toStrictEqual(tokenMock);
    });
  });
});
