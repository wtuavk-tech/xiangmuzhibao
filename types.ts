export interface WarrantyEntry {
  id: number;           // 序号
  projectId: string;    // 项目id
  projectName: string;  // 项目名称
  warrantyPeriod: string; // 质保期
}

export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}