import { createSlice } from "@reduxjs/toolkit";
import { uiStructure } from "./types";

const initialUiState: uiStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentState: uiStructure): uiStructure => ({
      ...currentState,
      isLoading: true,
    }),

    hideLoading: (currentState: uiStructure): uiStructure => ({
      ...currentState,
      isLoading: false,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
