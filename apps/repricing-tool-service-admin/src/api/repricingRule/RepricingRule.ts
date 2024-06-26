import { Product } from "../product/Product";

export type RepricingRule = {
  createdAt: Date;
  id: string;
  maximumPrice: number | null;
  minimumPrice: number | null;
  product?: Product | null;
  ruleDescription: string | null;
  targetProfitMargin: number | null;
  updatedAt: Date;
};
