import { TAX_CONFIG } from "./tax-config";

export interface TaxResult {
  grossRevenue: number;
  allowableExpenses: number;
  netProfit: number;
  personalAllowance: number;
  taxableIncome: number;
  incomeTax: number;
  incomeTaxBreakdown: {
    basic: number;
    higher: number;
    additional: number;
  };
  class4NI: number;
  class2NI: number;
  totalNI: number;
  totalTax: number;
  takeHomePay: number;
}

/**
 * Calculate UK self-employed taxes for a given income & expenses.
 * All figures in GBP (£). Pure function — no side effects.
 */
export function calculateTax(grossRevenue: number, allowableExpenses: number): TaxResult {
  const cfg = TAX_CONFIG;

  // Net profit
  const netProfit = Math.max(0, grossRevenue - allowableExpenses);

  // Taper Personal Allowance for high earners
  let personalAllowance = cfg.personalAllowance;
  if (netProfit > cfg.personalAllowanceTaperThreshold) {
    const excess = netProfit - cfg.personalAllowanceTaperThreshold;
    personalAllowance = Math.max(0, cfg.personalAllowance - Math.floor(excess / 2));
  }

  // Taxable income
  const taxableIncome = Math.max(0, netProfit - personalAllowance);

  // Income Tax Calculation (banded)
  let basicTax = 0;
  let higherTax = 0;
  let additionalTax = 0;

  const basicBandSize = cfg.incomeTax.basicRateLimit - cfg.personalAllowance;
  const higherBandSize = cfg.incomeTax.higherRateLimit - cfg.incomeTax.basicRateLimit;

  if (taxableIncome > 0) {
    const inBasic = Math.min(taxableIncome, basicBandSize);
    basicTax = inBasic * cfg.incomeTax.basicRate;
  }
  if (taxableIncome > basicBandSize) {
    const inHigher = Math.min(taxableIncome - basicBandSize, higherBandSize);
    higherTax = inHigher * cfg.incomeTax.higherRate;
  }
  if (taxableIncome > basicBandSize + higherBandSize) {
    const inAdditional = taxableIncome - basicBandSize - higherBandSize;
    additionalTax = inAdditional * cfg.incomeTax.additionalRate;
  }

  const incomeTax = basicTax + higherTax + additionalTax;

  // Class 4 NI
  const niCfg = cfg.nationalInsurance;
  let class4NI = 0;
  if (netProfit > niCfg.lowerProfitsLimit) {
    const mainBand = Math.min(netProfit, niCfg.upperProfitsLimit) - niCfg.lowerProfitsLimit;
    class4NI += mainBand * niCfg.mainRate;
  }
  if (netProfit > niCfg.upperProfitsLimit) {
    class4NI += (netProfit - niCfg.upperProfitsLimit) * niCfg.upperRate;
  }

  // Class 2 NI (flat rate if above threshold)
  const class2NI =
    netProfit > cfg.class2NI.smallProfitsThreshold
      ? cfg.class2NI.weeklyRate * cfg.class2NI.weeksInYear
      : 0;

  const totalNI = class4NI + class2NI;
  const totalTax = incomeTax + totalNI;
  const takeHomePay = Math.max(0, netProfit - totalTax);

  return {
    grossRevenue,
    allowableExpenses,
    netProfit,
    personalAllowance,
    taxableIncome,
    incomeTax,
    incomeTaxBreakdown: {
      basic: basicTax,
      higher: higherTax,
      additional: additionalTax,
    },
    class4NI,
    class2NI,
    totalNI,
    totalTax,
    takeHomePay,
  };
}

/** Format a number as GBP currency string */
export function formatGBP(value: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/** Format a number as GBP without pence (for slider display) */
export function formatGBPShort(value: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
