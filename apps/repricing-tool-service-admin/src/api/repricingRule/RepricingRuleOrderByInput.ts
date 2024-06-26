import { SortOrder } from "../../util/SortOrder";

export type RepricingRuleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  maximumPrice?: SortOrder;
  minimumPrice?: SortOrder;
  productId?: SortOrder;
  ruleDescription?: SortOrder;
  targetProfitMargin?: SortOrder;
  updatedAt?: SortOrder;
};
