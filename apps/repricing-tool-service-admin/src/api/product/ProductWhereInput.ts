import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { CompetitorListRelationFilter } from "../competitor/CompetitorListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PerformanceReportListRelationFilter } from "../performanceReport/PerformanceReportListRelationFilter";
import { RepricingRuleListRelationFilter } from "../repricingRule/RepricingRuleListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductWhereInput = {
  buyBoxStatus?: BooleanNullableFilter;
  competitors?: CompetitorListRelationFilter;
  currentPrice?: FloatNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  performanceReports?: PerformanceReportListRelationFilter;
  repricingRules?: RepricingRuleListRelationFilter;
  stockLevel?: IntNullableFilter;
};
