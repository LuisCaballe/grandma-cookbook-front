import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FeedbackDataStructure, UiStructure } from "./types";

const initialUiState: UiStructure = {
  isLoading: false,
  feedbackData: {
    showFeedback: false,
    isError: false,
    message: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      isLoading: true,
    }),

    hideLoading: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      isLoading: false,
    }),

    showFeedback: (
      currentState: UiStructure,
      action: PayloadAction<FeedbackDataStructure>
    ): UiStructure => ({
      ...currentState,
      feedbackData: {
        showFeedback: true,
        isError: action.payload.isError,
        message: action.payload.message,
      },
    }),

    hideFeedback: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      feedbackData: {
        showFeedback: false,
        isError: false,
        message: "",
      },
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showFeedback: showFeedbackActionCreator,
  hideFeedback: hideFeedbackActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
