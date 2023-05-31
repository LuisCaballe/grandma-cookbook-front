import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";
import { tokenMock } from "../../mocks/userMocks";

beforeEach(() => {
  localStorage.clear();
});

describe("Given a useLocalStorage custom hook", () => {
  const key = "token";

  describe("When is called its function setToken with a 'token' key and a token", () => {
    test("Then it should save a token in local storage", () => {
      const {
        result: {
          current: { setToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, tokenMock);

      expect(localStorage.getItem(key)).toStrictEqual(tokenMock);
    });
  });

  describe("When is called its function getToken with a 'token' key", () => {
    test("Then it should return the token saved in local storage", () => {
      const {
        result: {
          current: { setToken, getToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, tokenMock);

      const savedToken = getToken(key);

      expect(savedToken).toStrictEqual(tokenMock);
    });
  });
});
