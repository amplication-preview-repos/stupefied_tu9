import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CompetitorWhereInput = {
  competitorPrice?: FloatNullableFilter;
  id?: StringFilter;
  marketCondition?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
};
