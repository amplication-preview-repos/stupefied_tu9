import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PerformanceReportResolverBase } from "./base/performanceReport.resolver.base";
import { PerformanceReport } from "./base/PerformanceReport";
import { PerformanceReportService } from "./performanceReport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PerformanceReport)
export class PerformanceReportResolver extends PerformanceReportResolverBase {
  constructor(
    protected readonly service: PerformanceReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
