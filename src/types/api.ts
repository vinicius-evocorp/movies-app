export interface IPaginationResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface IPaginationParams {
  page: number;
}
