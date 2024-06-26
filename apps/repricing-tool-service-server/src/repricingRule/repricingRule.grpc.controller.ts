import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RepricingRuleService } from "./repricingRule.service";
import { RepricingRuleGrpcControllerBase } from "./base/repricingRule.grpc.controller.base";

@swagger.ApiTags("repricingRules")
@common.Controller("repricingRules")
export class RepricingRuleGrpcController extends RepricingRuleGrpcControllerBase {
  constructor(protected readonly service: RepricingRuleService) {
    super(service);
  }
}
