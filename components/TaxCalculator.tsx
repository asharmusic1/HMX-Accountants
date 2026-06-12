"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { calculateTax, formatGBP, formatGBPShort } from "@/lib/tax-calculator";
import { TAX_CONFIG } from "@/lib/tax-config";

const { sliderDefaults } = TAX_CONFIG;

export default function TaxCalculator() {
  const [revenue, setRevenue] = useState(sliderDefaults.revenue.default);
  const [expenses, setExpenses] = useState(sliderDefaults.expenses.default);

  const result = useMemo(() => calculateTax(revenue, expenses), [revenue, expenses]);

  const revenuePercent = useCallback(() => {
    const { min, max } = sliderDefaults.revenue;
    return ((revenue - min) / (max - min)) * 100;
  }, [revenue]);

  const expensePercent = useCallback(() => {
    const { min, max } = sliderDefaults.expenses;
    return ((expenses - min) / (max - min)) * 100;
  }, [expenses]);

  return (
    <div className="dark-glass-panel rounded-[32px] p-8 md:p-12 lg:p-14 flex flex-col lg:flex-row gap-12 relative shadow-2xl">
      {/* Watermark */}
      <div className="absolute -bottom-20 -left-20 opacity-[0.04] pointer-events-none text-white overflow-hidden">
        <span className="material-symbols-outlined" style={{ fontSize: 400 }}>account_balance</span>
      </div>

      {/* ── Input Section ── */}
      <div className="flex-1 space-y-12 relative z-10">
        {/* Revenue Slider */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <h3 className="text-xl md:text-2xl text-white font-medium">Annual Income (Revenue)</h3>
            <span className="text-3xl md:text-4xl text-brand-green font-bold font-mono">
              {formatGBPShort(revenue)}
            </span>
          </div>
          <div className="relative pt-2">
            <div className="relative">
              <div
                className="absolute top-1/2 left-0 h-2 rounded-l-full -translate-y-1/2 pointer-events-none"
                style={{ width: `${revenuePercent()}%`, background: "#559B16" }}
              />
              <input
                type="range"
                className="w-full relative z-10"
                min={sliderDefaults.revenue.min}
                max={sliderDefaults.revenue.max}
                step={sliderDefaults.revenue.step}
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                aria-label="Annual income slider"
                aria-valuetext={formatGBPShort(revenue)}
              />
            </div>
            <div className="flex justify-between mt-3 text-surface-dim font-mono text-xs">
              <span>{formatGBPShort(sliderDefaults.revenue.min)}</span>
              <span>{formatGBPShort(sliderDefaults.revenue.max)}</span>
            </div>
          </div>
        </div>

        {/* Expenses Slider */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <h3 className="text-xl md:text-2xl text-white font-medium">Allowable Business Expenses</h3>
            <span className="text-3xl md:text-4xl text-error font-bold font-mono">
              {formatGBPShort(expenses)}
            </span>
          </div>
          <div className="relative pt-2">
            <div className="relative">
              <div
                className="absolute top-1/2 left-0 h-2 rounded-l-full -translate-y-1/2 pointer-events-none"
                style={{ width: `${expensePercent()}%`, background: "#ba1a1a" }}
              />
              <input
                type="range"
                className="w-full relative z-10"
                min={sliderDefaults.expenses.min}
                max={sliderDefaults.expenses.max}
                step={sliderDefaults.expenses.step}
                value={expenses}
                onChange={(e) => setExpenses(Number(e.target.value))}
                aria-label="Allowable business expenses slider"
                aria-valuetext={formatGBPShort(expenses)}
              />
            </div>
            <div className="flex justify-between mt-3 text-surface-dim font-mono text-xs">
              <span>£0</span>
              <span>{formatGBPShort(sliderDefaults.expenses.max)}</span>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start backdrop-blur-sm">
          <span className="material-symbols-outlined text-brand-green shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
          <p className="text-surface-dim text-sm leading-relaxed">
            Business expenses must be solely for business operations. Our accountants ensure everything from
            home office allocations to software costs are optimised to reduce your final bill.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start backdrop-blur-sm">
          <span className="material-symbols-outlined text-yellow-400 shrink-0">warning</span>
          <p className="text-surface-dim text-sm leading-relaxed">
            <strong className="text-white">Estimate only.</strong> This calculator provides a guide and should
            not be treated as tax advice. For accurate advice based on your personal circumstances, please{" "}
            <Link href="/contact" className="text-brand-green underline underline-offset-2">
              contact HMX Accounting
            </Link>.
          </p>
        </div>
      </div>

      {/* ── Results Panel ── */}
      <div className="lg:w-[420px] bg-[#1a2636] rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden flex flex-col border border-primary/20 shrink-0">
        {/* Shimmer top bar */}
        <div className="shimmer-bg absolute top-0 left-0 w-full h-1 rounded-t-2xl" />

        <h4 className="font-mono text-xs text-center text-surface-dim uppercase tracking-[0.2em] mb-8 opacity-70">
          Est. Financial Summary — {TAX_CONFIG.taxYear}
        </h4>

        <div className="space-y-5 flex-1">
          <SummaryRow label="Net Profit" value={formatGBP(result.netProfit)} />
          <SummaryRow label="Personal Allowance" value={formatGBP(result.personalAllowance)} muted />
          <SummaryRow label="Taxable Income" value={formatGBP(result.taxableIncome)} />
          <SummaryRow label="Income Tax" value={formatGBP(result.incomeTax)} />
          <SummaryRow label="Class 4 NI" value={formatGBP(result.class4NI)} />
          {result.class2NI > 0 && (
            <SummaryRow label="Class 2 NI" value={formatGBP(result.class2NI)} />
          )}
          <div className="flex justify-between items-center py-2 border-t border-white/10 mt-2">
            <span className="text-brand-green font-bold">Total Tax Liability</span>
            <span className="text-2xl text-brand-green font-bold font-mono">{formatGBP(result.totalTax)}</span>
          </div>
        </div>

        <div className="mt-8 space-y-6 pt-6 border-t border-white/10">
          <div className="flex justify-between items-end gap-4">
            <span className="text-surface-dim text-sm max-w-[120px]">Your Take-home Pay</span>
            <span className="text-3xl text-brand-green font-bold font-mono text-right">
              {formatGBP(result.takeHomePay)}
            </span>
          </div>

          <Link
            href="/contact"
            className="w-full py-4 rounded-xl font-semibold text-sm text-white transition-all flex items-center justify-center gap-3 group shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: "linear-gradient(180deg, #559B16 0%, #438400 100%)" }}
          >
            Speak to an Accountant
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex justify-between items-center border-b border-white/5 pb-4">
      <span className={`text-sm ${muted ? "text-surface-dim/60" : "text-surface-dim"}`}>{label}</span>
      <span className={`font-mono text-sm ${muted ? "text-white/40" : "text-white"}`}>{value}</span>
    </div>
  );
}
