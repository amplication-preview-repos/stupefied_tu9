import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CompetitorModuleBase } from "./base/competitor.module.base";
import { CompetitorService } from "./competitor.service";
import { CompetitorController } from "./competitor.controller";
import { CompetitorGrpcController } from "./competitor.grpc.controller";
import { CompetitorResolver } from "./competitor.resolver";

@Module({
  imports: [CompetitorModuleBase, forwardRef(() => AuthModule)],
  controllers: [CompetitorController, CompetitorGrpcController],
  providers: [CompetitorService, CompetitorResolver],
  exports: [CompetitorService],
})
export class CompetitorModule {}
