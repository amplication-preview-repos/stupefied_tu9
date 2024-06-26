import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PerformanceReportServiceBase } from "./base/performanceReport.service.base";

@Injectable()
export class PerformanceReportService extends PerformanceReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
