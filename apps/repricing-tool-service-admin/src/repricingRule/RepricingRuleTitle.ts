import { RepricingRule as TRepricingRule } from "../api/repricingRule/RepricingRule";

export const REPRICINGRULE_TITLE_FIELD = "id";

export const RepricingRuleTitle = (record: TRepricingRule): string => {
  return record.id?.toString() || String(record.id);
};
