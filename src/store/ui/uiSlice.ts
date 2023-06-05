import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FeedbackPayloadStructure, UiStructure } from "./types";

const initialUiState: UiStructure = {
  isLoading: false,
  isError: false,
  message: "",
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
      action: PayloadAction<FeedbackPayloadStructure>
    ): UiStructure => ({
      ...currentState,
      isError: action.payload.isError,
      message: action.payload.message,
    }),
    hideFeedback: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      isError: false,
      message: "",
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
