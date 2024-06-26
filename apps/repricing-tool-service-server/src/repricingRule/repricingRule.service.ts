import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RepricingRuleServiceBase } from "./base/repricingRule.service.base";

@Injectable()
export class RepricingRuleService extends RepricingRuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
