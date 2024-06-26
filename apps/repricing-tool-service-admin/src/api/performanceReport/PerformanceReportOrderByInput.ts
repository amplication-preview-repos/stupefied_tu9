import { SortOrder } from "../../util/SortOrder";

export type PerformanceReportOrderByInput = {
  competitorAnalysis?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  pricingHistory?: SortOrder;
  productId?: SortOrder;
  sales?: SortOrder;
  updatedAt?: SortOrder;
};
