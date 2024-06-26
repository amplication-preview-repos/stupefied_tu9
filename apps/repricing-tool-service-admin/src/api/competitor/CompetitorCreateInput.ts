import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CompetitorCreateInput = {
  competitorPrice?: number | null;
  marketCondition?: string | null;
  product?: ProductWhereUniqueInput | null;
};
