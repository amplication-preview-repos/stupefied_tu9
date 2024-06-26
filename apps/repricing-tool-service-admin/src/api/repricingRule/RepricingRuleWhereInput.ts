import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RepricingRuleWhereInput = {
  id?: StringFilter;
  maximumPrice?: FloatNullableFilter;
  minimumPrice?: FloatNullableFilter;
  product?: ProductWhereUniqueInput;
  ruleDescription?: StringNullableFilter;
  targetProfitMargin?: FloatNullableFilter;
};
