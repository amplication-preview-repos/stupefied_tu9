import { Product } from "../product/Product";

export type Competitor = {
  competitorPrice: number | null;
  createdAt: Date;
  id: string;
  marketCondition: string | null;
  product?: Product | null;
  updatedAt: Date;
};
