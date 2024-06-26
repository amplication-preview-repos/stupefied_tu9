import { PerformanceReportWhereInput } from "./PerformanceReportWhereInput";
import { PerformanceReportOrderByInput } from "./PerformanceReportOrderByInput";

export type PerformanceReportFindManyArgs = {
  where?: PerformanceReportWhereInput;
  orderBy?: Array<PerformanceReportOrderByInput>;
  skip?: number;
  take?: number;
};
