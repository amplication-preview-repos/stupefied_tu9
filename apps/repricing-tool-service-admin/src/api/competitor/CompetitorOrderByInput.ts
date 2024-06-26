import { SortOrder } from "../../util/SortOrder";

export type CompetitorOrderByInput = {
  competitorPrice?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  marketCondition?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
};
