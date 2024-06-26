import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PerformanceReportWhereInput = {
  competitorAnalysis?: JsonFilter;
  id?: StringFilter;
  pricingHistory?: JsonFilter;
  product?: ProductWhereUniqueInput;
  sales?: IntNullableFilter;
};
