import { Competitor as TCompetitor } from "../api/competitor/Competitor";

export const COMPETITOR_TITLE_FIELD = "marketCondition";

export const CompetitorTitle = (record: TCompetitor): string => {
  return record.marketCondition?.toString() || String(record.id);
};
