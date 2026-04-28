/**
 * AutoInsurance AI: Total Loss Auditor
 * Audits insurance "Market Value" reports (CCC One / Mitchell) for lowball offers.
 */

export interface InsuranceOffer {
  valuationReportId: string;
  offeredAmount: number;
  comparablesUsed: number;
  conditionAdjustments: number;
}

export function auditTotalLoss(offer: InsuranceOffer, marketData: number) {
  const discrepancy = marketData - offer.offeredAmount;

  return {
    discrepancy,
    underpaymentPercentage: ((discrepancy / marketData) * 100).toFixed(1) + "%",
    isLowball: discrepancy > (marketData * 0.15),
    recommendation: discrepancy > 0 ? "Generate Total Loss Rebuttal (Forensic Comp Audit)" : "Offer is fair"
  };
}
