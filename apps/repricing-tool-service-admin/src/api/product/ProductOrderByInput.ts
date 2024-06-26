import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  buyBoxStatus?: SortOrder;
  createdAt?: SortOrder;
  currentPrice?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  stockLevel?: SortOrder;
  updatedAt?: SortOrder;
};
