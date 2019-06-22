// 分页基础查询参数（后端决定），其他参数通过extends自有扩展
export interface PageParams {
  page?: string | number;
  limit?: string | number;
}

// 分页基础响应参数，records即为数据内容（后端决定）
export interface PageResponse<T = any> {
  current: number;
  pages: number;
  size: number;
  total: number;
  records: T[];
}
