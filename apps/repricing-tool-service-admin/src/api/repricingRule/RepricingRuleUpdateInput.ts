import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type RepricingRuleUpdateInput = {
  maximumPrice?: number | null;
  minimumPrice?: number | null;
  product?: ProductWhereUniqueInput | null;
  ruleDescription?: string | null;
  targetProfitMargin?: number | null;
};
