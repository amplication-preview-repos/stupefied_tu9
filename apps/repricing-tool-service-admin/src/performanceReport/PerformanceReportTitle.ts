import { PerformanceReport as TPerformanceReport } from "../api/performanceReport/PerformanceReport";

export const PERFORMANCEREPORT_TITLE_FIELD = "id";

export const PerformanceReportTitle = (record: TPerformanceReport): string => {
  return record.id?.toString() || String(record.id);
};
