import { Competitor } from "../competitor/Competitor";
import { PerformanceReport } from "../performanceReport/PerformanceReport";
import { RepricingRule } from "../repricingRule/RepricingRule";

export type Product = {
  buyBoxStatus: boolean | null;
  competitors?: Array<Competitor>;
  createdAt: Date;
  currentPrice: number | null;
  id: string;
  name: string | null;
  performanceReports?: Array<PerformanceReport>;
  repricingRules?: Array<RepricingRule>;
  stockLevel: number | null;
  updatedAt: Date;
};
