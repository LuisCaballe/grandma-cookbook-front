export interface FeedbackDataStructure {
  isError: boolean;
  showFeedback: boolean;
  message: string;
}
export interface UiStructure {
  isLoading: boolean;
  feedbackData: FeedbackDataStructure;
  paginationData: PaginationDataStructure;
}

export interface PaginationDataStructure {
  page: number;
  skip: number;
}
