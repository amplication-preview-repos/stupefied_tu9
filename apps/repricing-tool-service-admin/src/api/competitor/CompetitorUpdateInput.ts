import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CompetitorUpdateInput = {
  competitorPrice?: number | null;
  marketCondition?: string | null;
  product?: ProductWhereUniqueInput | null;
};
