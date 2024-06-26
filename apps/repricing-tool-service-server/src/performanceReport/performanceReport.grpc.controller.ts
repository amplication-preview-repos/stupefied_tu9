import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PerformanceReportService } from "./performanceReport.service";
import { PerformanceReportGrpcControllerBase } from "./base/performanceReport.grpc.controller.base";

@swagger.ApiTags("performanceReports")
@common.Controller("performanceReports")
export class PerformanceReportGrpcController extends PerformanceReportGrpcControllerBase {
  constructor(protected readonly service: PerformanceReportService) {
    super(service);
  }
}
