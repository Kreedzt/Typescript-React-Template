interface PageParams {
  page?: string | number;
  limit?: string | number;
}

interface PageResponse<T = any> {
  current: number;
  pages: number;
  size: number;
  total: number;
  records: T[];
}

export { PageParams, PageResponse };
