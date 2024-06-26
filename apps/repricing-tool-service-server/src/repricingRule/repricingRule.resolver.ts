import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RepricingRuleResolverBase } from "./base/repricingRule.resolver.base";
import { RepricingRule } from "./base/RepricingRule";
import { RepricingRuleService } from "./repricingRule.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RepricingRule)
export class RepricingRuleResolver extends RepricingRuleResolverBase {
  constructor(
    protected readonly service: RepricingRuleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
