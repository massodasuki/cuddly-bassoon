export interface PaginationMetaDto {
  total: number;
  page: number;
  limit: number;
  pageCount: number;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: PaginationMetaDto;
}
