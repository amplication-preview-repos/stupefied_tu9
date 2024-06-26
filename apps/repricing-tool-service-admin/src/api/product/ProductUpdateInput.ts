import { CompetitorUpdateManyWithoutProductsInput } from "./CompetitorUpdateManyWithoutProductsInput";
import { PerformanceReportUpdateManyWithoutProductsInput } from "./PerformanceReportUpdateManyWithoutProductsInput";
import { RepricingRuleUpdateManyWithoutProductsInput } from "./RepricingRuleUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  buyBoxStatus?: boolean | null;
  competitors?: CompetitorUpdateManyWithoutProductsInput;
  currentPrice?: number | null;
  name?: string | null;
  performanceReports?: PerformanceReportUpdateManyWithoutProductsInput;
  repricingRules?: RepricingRuleUpdateManyWithoutProductsInput;
  stockLevel?: number | null;
};
