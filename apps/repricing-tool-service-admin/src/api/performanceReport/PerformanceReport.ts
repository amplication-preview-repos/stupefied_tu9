import { JsonValue } from "type-fest";
import { Product } from "../product/Product";

export type PerformanceReport = {
  competitorAnalysis: JsonValue;
  createdAt: Date;
  id: string;
  pricingHistory: JsonValue;
  product?: Product | null;
  sales: number | null;
  updatedAt: Date;
};
