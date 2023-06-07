import { FeedbackDataStructure, UiStructure } from "./types";
import {
  hideFeedbackActionCreator,
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading reducer", () => {
  describe("When it receives the current UI state and a showLoading action", () => {
    test("Then it should return the new UI state with isLoading property set at true", () => {
      const currentUiState: UiStructure = {
        isLoading: false,
        feedbackData: {
          showFeedback: false,
          isError: false,
          message: "",
        },
      };
      const expectedUiState: UiStructure = {
        isLoading: true,
        feedbackData: {
          showFeedback: false,
          isError: false,
          message: "",
        },
      };

      const newUiState = uiReducer(currentUiState, showLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});

describe("Given a hideLoading reducer", () => {
  describe("When it receives the current UI state and a hideLoading action", () => {
    test("Then it should return the new UI state with isLoading property set at false", () => {
      const currentUiState: UiStructure = {
        isLoading: true,
        feedbackData: {
          showFeedback: false,
          isError: false,
          message: "",
        },
      };
      const expectedUiState: UiStructure = {
        isLoading: false,
        feedbackData: {
          showFeedback: false,
          isError: false,
          message: "",
        },
      };

      const newUiState = uiReducer(currentUiState, hideLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});

describe("Given a showFeedback reducer", () => {
  describe("When it receives the current UI state and a showFeedback action with the message 'Wrong credentials'", () => {
    test("Then it should return the new UI state with the message 'Wrong credentials'", () => {
      const currentUiState: UiStructure = {
        isLoading: false,
        feedbackData: {
          showFeedback: false,
          isError: false,
          message: "",
        },
      };
      const expectedUiState: UiStructure = {
        isLoading: false,
        feedbackData: {
          showFeedback: true,
          isError: true,
          message: "Wrong credentials",
        },
      };
      const feedbackPayload: FeedbackDataStructure = {
        isError: true,
        message: "Wrong credentials",
        showFeedback: true,
      };

      const newUiState = uiReducer(
        currentUiState,
        showFeedbackActionCreator(feedbackPayload)
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});

describe("Given a hideFeedback reducer", () => {
  describe("When it receives the current UI state and a hideFeedback action", () => {
    test("Then it should return the new UI state with and empty message and isError set to false", () => {
      const currentUiState: UiStructure = {
        isLoading: false,
        feedbackData: {
          showFeedback: true,
          isError: true,
          message: "Wrong credentials",
        },
      };
      const expectedUiState: UiStructure = {
        isLoading: false,
        feedbackData: {
          showFeedback: false,
          isError: false,
          message: "",
        },
      };

      const newUiState = uiReducer(currentUiState, hideFeedbackActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
