
export interface PaginatedResult<T> {
  results:T[];
  num_results: number,
  per_page:  number;
  total_pages:  number;
  page:  number;
}
