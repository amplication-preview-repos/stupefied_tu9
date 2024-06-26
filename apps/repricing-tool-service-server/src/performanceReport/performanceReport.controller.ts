import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PerformanceReportService } from "./performanceReport.service";
import { PerformanceReportControllerBase } from "./base/performanceReport.controller.base";

@swagger.ApiTags("performanceReports")
@common.Controller("performanceReports")
export class PerformanceReportController extends PerformanceReportControllerBase {
  constructor(
    protected readonly service: PerformanceReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
