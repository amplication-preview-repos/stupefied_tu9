import { InputJsonValue } from "../../types";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PerformanceReportUpdateInput = {
  competitorAnalysis?: InputJsonValue;
  pricingHistory?: InputJsonValue;
  product?: ProductWhereUniqueInput | null;
  sales?: number | null;
};
