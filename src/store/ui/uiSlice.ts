import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  FeedbackDataStructure,
  PaginationDataStructure,
  UiStructure,
} from "./types";

const initialUiState: UiStructure = {
  isLoading: false,
  feedbackData: {
    showFeedback: false,
    isError: false,
    message: "",
  },
  paginationData: {
    page: 1,
    skip: 0,
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

    pagination: (
      currentState: UiStructure,
      action: PayloadAction<PaginationDataStructure>
    ): UiStructure => ({
      ...currentState,
      paginationData: {
        page: action.payload.page,
        skip: action.payload.skip,
      },
    }),

    resetPagination: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      ...initialUiState,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showFeedback: showFeedbackActionCreator,
  hideFeedback: hideFeedbackActionCreator,
  pagination: paginationActionCreator,
  resetPagination: resetPaginationActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
