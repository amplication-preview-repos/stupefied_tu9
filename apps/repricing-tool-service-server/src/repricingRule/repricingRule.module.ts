import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RepricingRuleModuleBase } from "./base/repricingRule.module.base";
import { RepricingRuleService } from "./repricingRule.service";
import { RepricingRuleController } from "./repricingRule.controller";
import { RepricingRuleGrpcController } from "./repricingRule.grpc.controller";
import { RepricingRuleResolver } from "./repricingRule.resolver";

@Module({
  imports: [RepricingRuleModuleBase, forwardRef(() => AuthModule)],
  controllers: [RepricingRuleController, RepricingRuleGrpcController],
  providers: [RepricingRuleService, RepricingRuleResolver],
  exports: [RepricingRuleService],
})
export class RepricingRuleModule {}
