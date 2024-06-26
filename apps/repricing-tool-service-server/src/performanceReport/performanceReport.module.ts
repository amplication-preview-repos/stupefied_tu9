import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PerformanceReportModuleBase } from "./base/performanceReport.module.base";
import { PerformanceReportService } from "./performanceReport.service";
import { PerformanceReportController } from "./performanceReport.controller";
import { PerformanceReportGrpcController } from "./performanceReport.grpc.controller";
import { PerformanceReportResolver } from "./performanceReport.resolver";

@Module({
  imports: [PerformanceReportModuleBase, forwardRef(() => AuthModule)],
  controllers: [PerformanceReportController, PerformanceReportGrpcController],
  providers: [PerformanceReportService, PerformanceReportResolver],
  exports: [PerformanceReportService],
})
export class PerformanceReportModule {}
