import type { Week } from "../types";

export const week03: Week = {
  week: 3,
  title: "Corporate Finance",
  tagline: "Time, risk, and the value of a future dollar.",
  topics: ["Time value of money", "NPV/IRR", "Cost of capital", "Capital structure"],
  lessons: [
    {
      id: "l1",
      title: "Time value of money",
      summary: "A dollar today is worth more than a dollar tomorrow. Everything in finance flows from this.",
      body: `# Time value of money\n\nMoney compounds. A dollar invested at rate r grows to \`(1+r)^n\` after n periods. Conversely, a future dollar discounted at r is worth \`1 / (1+r)^n\` today.\n\n## Present value\n\n\`PV = FV / (1+r)^n\`\n\n$1,000 in 5 years at 8% is worth \`1000 / 1.08^5 ≈ $681\` today.\n\n## NPV of a cash-flow stream\n\n\`NPV = Σ CF_t / (1+r)^t\`\n\nSum the discounted cash flows. If NPV > 0 at your cost of capital, the project creates value.\n\n## Perpetuity and growing perpetuity\n\n\`PV of perpetuity = CF / r\`\n\n\`PV of growing perpetuity = CF₁ / (r − g)\`\n\nThe Gordon model. Used for terminal values in DCFs.\n\n## Annuity\n\n\`PV = CF × [1 − (1+r)^-n] / r\`\n\nMortgages, leases, retirement payouts.`,
    },
    {
      id: "l2",
      title: "NPV vs IRR",
      summary: "NPV is the right rule. IRR is intuitive but breaks in known ways.",
      body: `# NPV vs IRR\n\n**NPV** is the dollar value created. **IRR** is the discount rate at which NPV = 0 — the project's intrinsic return.\n\n## Decision rule\n\n- NPV > 0 → accept.\n- IRR > cost of capital → accept.\n\nFor a standard project (outflow then inflows) these agree. They diverge when:\n\n- **Mutually exclusive projects of different scale** — IRR favors small high-return projects; NPV favors larger value creation.\n- **Non-conventional cash flows** (signs flip more than once) — IRR can have multiple solutions or none.\n- **Reinvestment assumption** — IRR implicitly assumes reinvestment at IRR, which is unrealistic.\n\n**Use NPV.** Report IRR alongside for intuition.\n\n## Payback period\n\nTime to recover the initial investment. Quick screen, but ignores time value and post-payback cash flows. Useful for liquidity-constrained decisions, not value creation.`,
    },
    {
      id: "l3",
      title: "Cost of capital (WACC)",
      summary: "The blended hurdle rate a firm must beat. It comes from debt cost, equity cost, and the mix.",
      body: `# WACC\n\n\`WACC = (E/V) × r_e + (D/V) × r_d × (1 − t)\`\n\n- E, D: market value of equity and debt; V = E + D.\n- r_e: cost of equity (often via CAPM: \`r_f + β × ERP\`).\n- r_d: cost of debt (yield on bonds).\n- t: marginal tax rate. Interest is tax-deductible — the (1−t) is the *tax shield*.\n\n## CAPM\n\n\`r_e = r_f + β × (r_m − r_f)\`\n\nβ measures sensitivity to market moves. β=1 moves with the market, β>1 is more volatile.\n\n## Worked example\n\nFirm: 60% equity ($60M), 40% debt ($40M), β=1.2, r_f=4%, ERP=6%, r_d=6%, t=25%.\n\n- r_e = 4 + 1.2×6 = 11.2%\n- After-tax r_d = 6 × 0.75 = 4.5%\n- WACC = 0.6×11.2 + 0.4×4.5 = **8.5%**\n\nUse 8.5% to discount this firm's average-risk projects.`,
    },
    {
      id: "l4",
      title: "Capital structure",
      summary: "Why companies use debt — and where the limit is.",
      body: `# Capital structure\n\n**Modigliani-Miller (in a perfect world)**: capital structure doesn't affect firm value. In the real world:\n\n## Why debt helps\n\n- **Tax shield** — interest is deductible.\n- **Discipline** — debt service forces operational rigor.\n\n## Why too much debt hurts\n\n- **Financial distress costs** — bankruptcy, lost customers/talent, fire-sale asset sales.\n- **Agency costs** — distressed firms may take excessive risk.\n\n## Trade-off theory\n\nOptimal leverage balances tax shield against expected distress costs. Stable cash-flow businesses (utilities, real estate) carry more debt; volatile ones (biotech, software startups) carry less.\n\n## Pecking order\n\nFirms prefer: internal funds → debt → equity. Issuing equity signals overvaluation, so it's expensive.`,
    },
  ],
  quiz: [
    { id: "q1", prompt: "PV of $10,000 in 10 years at 7% discount rate is approximately:", choices: ["$5,083", "$7,000", "$8,200", "$10,000"], answerIndex: 0, explanation: "10000/1.07^10 ≈ 5083." },
    { id: "q2", prompt: "When NPV and IRR conflict on mutually exclusive projects, use:", choices: ["IRR", "Payback", "NPV", "Whichever is larger"], answerIndex: 2, explanation: "NPV measures absolute value creation." },
    { id: "q3", prompt: "Why does debt have an after-tax cost of r_d × (1−t)?", choices: ["Banks discount it", "Interest is tax deductible", "Inflation lowers it", "Default risk"], answerIndex: 1, explanation: "The tax shield is the deductibility of interest." },
    { id: "q4", prompt: "A perpetuity paying $500/year at 5% is worth:", choices: ["$2,500", "$5,000", "$10,000", "$25,000"], answerIndex: 2, explanation: "500/0.05 = 10,000." },
  ],
  assignment: {
    id: "a1",
    title: "NPV evaluation",
    prompt: "A factory upgrade costs $500,000 today and generates $120,000/year for 6 years, then is sold for $50,000. Cost of capital is 9%. (1) Compute NPV. (2) Compute IRR (estimate or use a spreadsheet). (3) Should the firm proceed? (4) How does your answer change if cost of capital rises to 14%? Explain.",
    rubric: "Correct NPV at 9% (3 pts). Reasonable IRR estimate (2 pts). Clear decision with reasoning (2 pts). Correct re-evaluation at 14% and explanation (3 pts).",
  },
};