import { InputJsonValue } from "../../types";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PerformanceReportCreateInput = {
  competitorAnalysis?: InputJsonValue;
  pricingHistory?: InputJsonValue;
  product?: ProductWhereUniqueInput | null;
  sales?: number | null;
};
