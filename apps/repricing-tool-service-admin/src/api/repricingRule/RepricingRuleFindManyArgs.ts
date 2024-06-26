import { RepricingRuleWhereInput } from "./RepricingRuleWhereInput";
import { RepricingRuleOrderByInput } from "./RepricingRuleOrderByInput";

export type RepricingRuleFindManyArgs = {
  where?: RepricingRuleWhereInput;
  orderBy?: Array<RepricingRuleOrderByInput>;
  skip?: number;
  take?: number;
};
