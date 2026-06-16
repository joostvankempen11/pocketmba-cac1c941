import type { Week } from "../types";

export const week04: Week = {
  week: 4,
  title: "Microeconomics for Managers",
  tagline: "Supply, demand, elasticity, and why markets reach the prices they do.",
  topics: ["Supply and demand", "Elasticity", "Marginal analysis", "Market structure"],
  lessons: [
    {
      id: "l1",
      title: "Supply, demand, equilibrium",
      summary: "Price emerges where willingness to pay meets willingness to supply.",
      body: `# Supply and demand\n\n**Demand curve** slopes down: at higher prices, less quantity demanded. **Supply curve** slopes up: at higher prices, more quantity supplied. Equilibrium is the intersection.\n\n## Shifts vs movements\n\n- A **movement along** a curve = price change.\n- A **shift** = a non-price determinant changes (income, input costs, tastes, expectations, substitutes).\n\nConflating the two is the most common analytical error.\n\n## Consumer and producer surplus\n\n- **Consumer surplus** — area below demand, above price. Value buyers got beyond what they paid.\n- **Producer surplus** — area above supply, below price. Value to sellers above their minimum.\n\nTotal surplus is maximized at competitive equilibrium. Taxes, price floors, and price ceilings create *deadweight loss* — value that disappears.`,
    },
    {
      id: "l2",
      title: "Elasticity",
      summary: "How responsive quantity is to price. The single most important concept for pricing decisions.",
      body: `# Elasticity\n\n\`Price elasticity of demand = %ΔQ / %ΔP\`\n\nUsually negative; we cite the absolute value.\n\n- **Elastic** (|E|>1): quantity responsive; raising price cuts revenue.\n- **Inelastic** (|E|<1): quantity unresponsive; raising price raises revenue.\n- **Unit elastic** (|E|=1): revenue unchanged.\n\n## Determinants\n\n- Substitutes available → more elastic.\n- Necessity vs luxury → necessities inelastic.\n- Share of budget → bigger share = more elastic.\n- Time horizon → longer = more elastic.\n\n## Pricing implications\n\nMarkup over marginal cost is governed by elasticity:\n\n\`P = MC × E / (E − 1)\` (E in absolute value)\n\nLower elasticity → higher optimal markup. This is why luxury brands and patented drugs price far above cost, while commodity sellers can't.\n\n## Cross-price and income elasticity\n\n- **Cross-price**: substitutes (positive) vs complements (negative).\n- **Income**: normal goods (positive) vs inferior (negative).`,
    },
    {
      id: "l3",
      title: "Market structure",
      summary: "Profitability depends on how many compete and how differentiated you are.",
      body: `# Market structures\n\n| Structure | Sellers | Differentiation | Pricing power |\n|---|---|---|---|\n| Perfect competition | Many | None | None (price taker) |\n| Monopolistic competition | Many | Some | Limited |\n| Oligopoly | Few | Varies | Significant, strategic |\n| Monopoly | One | Unique | High (subject to demand) |\n\n## Implications\n\n- **Perfect competition**: long-run economic profit → 0. New entrants bid prices down to marginal cost.\n- **Monopoly**: produces less than socially optimal, charges more. Regulated when natural (utilities).\n- **Oligopoly**: behavior depends on game theory — collusion (price leadership) or aggressive (price wars).\n\nMost real markets are monopolistic competition or oligopoly. Strategy (next week) is about engineering yourself out of perfect competition.`,
    },
  ],
  quiz: [
    { id: "q1", prompt: "If a 10% price cut leads to a 25% sales increase, demand is:", choices: ["Inelastic", "Unit elastic", "Elastic", "Perfectly inelastic"], answerIndex: 2, explanation: "|E| = 2.5 > 1." },
    { id: "q2", prompt: "A price ceiling set below equilibrium creates:", choices: ["Surplus", "Shortage", "Higher tax revenue", "No effect"], answerIndex: 1, explanation: "Quantity demanded exceeds quantity supplied." },
    { id: "q3", prompt: "In perfect competition, long-run economic profit is:", choices: ["Maximized", "Zero", "Equal to fixed cost", "Negative"], answerIndex: 1, explanation: "Free entry drives profit to zero." },
  ],
  assignment: {
    id: "a1",
    title: "Elasticity-driven pricing memo",
    prompt: "Pick a product you know well. Estimate (with reasoning) its price elasticity. Describe a pricing change you'd recommend, predict the revenue impact, and discuss two factors that could make your estimate wrong.",
    rubric: "Reasonable elasticity estimate with justification (3 pts). Correct directional revenue prediction (3 pts). Two thoughtful caveats (2 pts). Clarity (2 pts).",
  },
};