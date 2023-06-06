export interface UiStructure {
  isLoading: boolean;
  isError: boolean;
  showFeedback: boolean;
  message: string;
}

export interface FeedbackPayloadStructure {
  message: string;
  isError: boolean;
}
