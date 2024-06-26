import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RepricingRuleService } from "./repricingRule.service";
import { RepricingRuleControllerBase } from "./base/repricingRule.controller.base";

@swagger.ApiTags("repricingRules")
@common.Controller("repricingRules")
export class RepricingRuleController extends RepricingRuleControllerBase {
  constructor(
    protected readonly service: RepricingRuleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
