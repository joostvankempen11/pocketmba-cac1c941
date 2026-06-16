import type { Week } from "../types";

export const week11: Week = {
  week: 11,
  title: "Entrepreneurship & Innovation",
  tagline: "Test ideas cheaply, find product-market fit, then scale what works.",
  topics: ["Lean startup", "Business models", "Customer development", "Innovator's dilemma"],
  lessons: [
    {
      id: "l1",
      title: "The lean startup",
      summary: "A startup is a search for a repeatable business model. Reduce the cost of being wrong.",
      body: `# Lean startup\n\nEric Ries reframed startups as *experiments in conditions of extreme uncertainty*. The unit of progress is not features shipped but **validated learning**.\n\n## Build-measure-learn loop\n\n1. **Build** a minimum viable product (MVP) — smallest experiment that tests a key assumption.\n2. **Measure** with actionable metrics (cohort retention, conversion, willingness to pay).\n3. **Learn** — confirmed → double down; disconfirmed → pivot.\n\n## Types of MVPs\n\n- **Landing page** — does anyone want this?\n- **Concierge** — manually deliver the service.\n- **Wizard of Oz** — fake the backend.\n- **Single-feature** — strip product to the core promise.\n\n## Pivots\n\nNot failure — a change in *strategy* while keeping the *vision*. Customer segment pivot, problem pivot, platform pivot, monetization pivot, etc.\n\n## Vanity vs actionable metrics\n\nTotal users, page views, press hits — vanity. Cohort retention, conversion by source, payback period — actionable.`,
    },
    {
      id: "l2",
      title: "Business models",
      summary: "Who pays, how much, for what, and how it gets to them.",
      body: `# Business models\n\nThe **Business Model Canvas** (Osterwalder) — nine blocks:\n\n1. Customer segments\n2. Value propositions\n3. Channels\n4. Customer relationships\n5. Revenue streams\n6. Key resources\n7. Key activities\n8. Key partnerships\n9. Cost structure\n\nFit between blocks matters more than each block in isolation.\n\n## Revenue model archetypes\n\nSubscription, transactional, marketplace fee, advertising, licensing, freemium, usage-based, services. Each implies different unit economics and growth dynamics.\n\n## Product-market fit\n\nMarc Andreessen: *"PMF is when the market pulls the product out of your hands."* Leading indicators: organic growth, low churn, customers describing the product to others accurately, declining CAC.`,
    },
    {
      id: "l3",
      title: "Innovation and the incumbent's dilemma",
      summary: "Good management can be why incumbents lose to disruptors.",
      body: `# Disruption\n\nClayton Christensen: established firms get out-competed by entrants who initially serve unattractive segments with inferior-but-cheaper products. As the disruptor improves, it moves upmarket and displaces the incumbent.\n\nWhy incumbents miss it:\n- The disruption initially has low margins → ignored.\n- Best customers don't want it → product roadmap deprioritizes it.\n- Resource allocation processes favor existing business.\n\nExamples: minimills vs integrated steel, digital photography vs Kodak, cloud vs on-prem servers.\n\n## Defending against disruption\n\n- Spin out a separate unit with its own P&L, metrics, customers.\n- Be willing to cannibalize.\n- Distinguish *sustaining* (improve current offering) from *disruptive* innovation.\n\n## Innovation portfolios\n\nMcKinsey's three horizons: H1 (defend core), H2 (extend adjacencies), H3 (create new). Most firms over-invest in H1 and starve H3.`,
    },
  ],
  quiz: [
    { id: "q1", prompt: "The purpose of an MVP is to:", choices: ["Ship the cheapest possible product", "Test a critical assumption with minimum effort", "Beat competitors to market", "Maximize early revenue"], answerIndex: 1, explanation: "MVPs are experiments, not products." },
    { id: "q2", prompt: "A pivot is best defined as:", choices: ["Quitting the startup", "A change in strategy while preserving the vision", "Raising another round", "Rebranding"], answerIndex: 1, explanation: "Strategy changes; vision persists." },
    { id: "q3", prompt: "Christensen's disruptive innovations typically:", choices: ["Start at the high end", "Start in unattractive low-end or new segments", "Out-innovate incumbents technically from day one", "Always come from large firms"], answerIndex: 1, explanation: "Disruption climbs from below." },
  ],
  assignment: {
    id: "a1",
    title: "MVP plan",
    prompt: "Take a startup idea (yours or hypothetical). (1) State the riskiest assumption that, if wrong, kills the idea. (2) Design an MVP that tests it within two weeks and <$500. (3) Specify the success threshold (numbers, not adjectives). (4) Describe how you'd pivot if the result disconfirms it.",
    rubric: "Genuinely risky, non-obvious assumption (3 pts). Realistic MVP under constraints (3 pts). Quantitative success threshold (2 pts). Credible pivot plan (2 pts).",
  },
};