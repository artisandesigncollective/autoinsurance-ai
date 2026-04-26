import React from 'react';

/**
 * AutoInsurance AI: Landing Page
 * 
 * Pain Point: When a car is totaled, insurance adjusters use proprietary software (CCC ONE)
 * to lowball the payout by 30%. Drivers accept because they're desperate for a replacement car.
 * Solution: AI scrapes local dealer inventory for exact Make/Model/Trim/Mileage matches to build
 * a forensic valuation report, then drafts a legal demand invoking the "Appraisal Clause."
 */

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-orange-50 text-slate-900 font-sans selection:bg-orange-600 selection:text-white">
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto border-b border-orange-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-black">A</div>
          <span className="text-xl font-black tracking-tighter">AutoInsurance AI</span>
        </div>
        <button className="text-sm font-bold text-orange-700 hover:text-black transition">Claim Tracker</button>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-32 text-center">
        <div className="inline-block bg-orange-200 text-orange-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-8 border border-orange-300">
          TOTAL LOSS NEGOTIATOR
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05] mb-8 text-slate-900">
          Your insurance lowballed you <span className="text-orange-600 underline decoration-orange-300">by $3,000+.</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Insurance adjusters use CCC ONE software designed to undervalue your car by 30%. Upload their offer and our AI will scrape local dealer inventory for exact matches, building a forensic valuation report that invokes the Appraisal Clause in your policy.
        </p>

        <button className="bg-orange-600 text-white px-12 py-5 rounded-xl font-black text-xl hover:bg-orange-700 transition shadow-[0_10px_40px_rgba(234,88,12,0.3)] w-full sm:w-auto">
          Fight the Lowball ($149)
        </button>
        <p className="text-sm text-slate-500 mt-6 font-medium">Average increase: $3,200. Works with all major insurers (State Farm, GEICO, Progressive, Allstate).</p>
      </main>

      <section className="bg-white border-y border-slate-200 py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-left">
          <div>
            <div className="text-4xl mb-4">🚗</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Dealer Inventory Scrape</h2>
            <p className="text-slate-600 text-sm leading-relaxed">AI searches AutoTrader, CarGurus, and Cars.com for identical Year/Make/Model/Trim/Mileage in your zip code to build ground-truth market value.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">📋</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Forensic Report</h2>
            <p className="text-slate-600 text-sm leading-relaxed">Generates a 15-page professional valuation report with comps, photos, and VIN data that the insurance company's own appraiser cannot dispute.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">⚖️</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Appraisal Clause</h2>
            <p className="text-slate-600 text-sm leading-relaxed">Auto-drafts a formal letter invoking your policy's Appraisal Clause, forcing the insurer into binding independent appraisal.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
