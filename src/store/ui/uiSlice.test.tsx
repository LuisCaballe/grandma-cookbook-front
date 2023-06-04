import { uiStructure } from "./types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading reducer", () => {
  describe("When it receives the current UI state and a showLoading action", () => {
    test("Then it should return the new UI state with isLoading property set at true", () => {
      const currentUiState: uiStructure = { isLoading: false };
      const expectedUiState: uiStructure = { isLoading: true };

      const newUiState = uiReducer(currentUiState, showLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});

describe("Given a hideLoading reducer", () => {
  describe("When it receives the current UI state and a hideLoading action", () => {
    test("Then it should return the new UI state with isLoading property set at false", () => {
      const currentUiState: uiStructure = { isLoading: true };
      const expectedUiState: uiStructure = { isLoading: false };

      const newUiState = uiReducer(currentUiState, hideLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
