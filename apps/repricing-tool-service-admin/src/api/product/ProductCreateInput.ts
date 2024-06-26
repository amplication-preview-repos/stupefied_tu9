import { CompetitorCreateNestedManyWithoutProductsInput } from "./CompetitorCreateNestedManyWithoutProductsInput";
import { PerformanceReportCreateNestedManyWithoutProductsInput } from "./PerformanceReportCreateNestedManyWithoutProductsInput";
import { RepricingRuleCreateNestedManyWithoutProductsInput } from "./RepricingRuleCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  buyBoxStatus?: boolean | null;
  competitors?: CompetitorCreateNestedManyWithoutProductsInput;
  currentPrice?: number | null;
  name?: string | null;
  performanceReports?: PerformanceReportCreateNestedManyWithoutProductsInput;
  repricingRules?: RepricingRuleCreateNestedManyWithoutProductsInput;
  stockLevel?: number | null;
};
