/**
 * HMX Accounting — UK Tax Configuration
 * 2025/2026 Tax Year
 *
 * Update these values each tax year. All monetary values in GBP (£).
 * Source: HMRC (https://www.gov.uk/income-tax-rates)
 */

export const TAX_CONFIG = {
  taxYear: "2025/2026",

  /** Personal Allowance — amount you can earn before paying income tax */
  personalAllowance: 12_570,

  /** Personal Allowance taper — reduces by £1 for every £2 earned over this */
  personalAllowanceTaperThreshold: 100_000,

  /** Income tax bands (applied to income above personal allowance) */
  incomeTax: {
    /** 20% — £12,571 to £50,270 */
    basicRate: 0.20,
    basicRateLimit: 50_270,

    /** 40% — £50,271 to £125,140 */
    higherRate: 0.40,
    higherRateLimit: 125_140,

    /** 45% — above £125,140 */
    additionalRate: 0.45,
  },

  /** National Insurance — Class 4 (Self-Employed) */
  nationalInsurance: {
    /** Lower Profits Limit — NI starts here */
    lowerProfitsLimit: 12_570,

    /** Upper Profits Limit — higher NI rate applies above this */
    upperProfitsLimit: 50_270,

    /** 6% — profits between LPL and UPL */
    mainRate: 0.06,

    /** 2% — profits above UPL */
    upperRate: 0.02,
  },

  /** Class 2 NI — flat weekly amount (applies if profits > Small Profits Threshold) */
  class2NI: {
    smallProfitsThreshold: 12_570,
    weeklyRate: 3.45,
    weeksInYear: 52,
  },

  /** Slider configuration defaults */
  sliderDefaults: {
    revenue: {
      min: 5_000,
      max: 150_000,
      default: 35_000,
      step: 500,
    },
    expenses: {
      min: 0,
      max: 50_000,
      default: 5_000,
      step: 100,
    },
  },
};

export type TaxConfig = typeof TAX_CONFIG;
