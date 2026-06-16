import type { Week } from "../types";

export const week06: Week = {
  week: 6,
  title: "Competitive Strategy",
  tagline: "Industry structure, sustainable advantage, and the choice of where to play.",
  topics: ["Five Forces", "Generic strategies", "Resource-based view", "Moats"],
  lessons: [
    {
      id: "l1",
      title: "Porter's Five Forces",
      summary: "Industry profitability is structural. Five forces determine how much value an industry creates vs. how much it captures.",
      body: `# Five Forces\n\nMichael Porter's framework explains why some industries (software, luxury, branded pharma) are persistently profitable and others (airlines, grocery, steel) are not.\n\n1. **Rivalry among existing competitors** — high when many similar players, slow growth, high fixed costs, low differentiation.\n2. **Threat of new entrants** — high when entry barriers are low (no scale economies, no brand, no proprietary tech).\n3. **Threat of substitutes** — alternatives that do the same job differently (Zoom vs flights, plant-based meat vs beef).\n4. **Bargaining power of buyers** — concentrated, price-sensitive, low switching costs.\n5. **Bargaining power of suppliers** — concentrated, no substitutes, high switching costs.\n\n## Use it for\n\n- Industry choice (entry/exit).\n- Identifying which forces to attack (e.g. lock customers in to reduce buyer power).\n- Predicting profitability changes when structure shifts (e.g. consolidation, regulation, technology).`,
    },
    {
      id: "l2",
      title: "Generic strategies",
      summary: "Cost leadership, differentiation, focus — and the trap of being stuck in the middle.",
      body: `# Generic strategies\n\n- **Cost leadership** — be the lowest-cost producer at industry-standard quality. Wins on scale, process, location.\n- **Differentiation** — offer something customers value enough to pay a premium for. Wins on brand, design, technology, service.\n- **Focus** — pick a narrow segment and dominate it with either cost or differentiation.\n\n## Stuck in the middle\n\nPorter's claim: trying both usually means winning neither. Real-world counterexamples exist (Toyota, IKEA), but they require *operational excellence* far beyond the average firm.\n\n## Strategy vs operational effectiveness\n\nOperational effectiveness = doing the same things better. Easily copied. Strategy = doing *different* things, or the same things *differently*. Hard to copy because it requires making genuine trade-offs.`,
    },
    {
      id: "l3",
      title: "Moats",
      summary: "Durable competitive advantages that protect returns from being competed away.",
      body: `# Moats\n\nSources of *sustainable* competitive advantage:\n\n1. **Intangible assets** — brands, patents, regulatory licenses. (Coca-Cola, Pfizer.)\n2. **Switching costs** — pain of changing vendor. (Salesforce, SAP, Bloomberg.)\n3. **Network effects** — value grows with users. (Visa, LinkedIn, marketplaces.)\n4. **Cost advantages** — structural scale or location. (Walmart, GEICO.)\n5. **Efficient scale** — market only supports a few players. (Pipelines, regional utilities.)\n\n## Testing for a moat\n\nIs ROIC > cost of capital? Has it persisted >10 years against well-resourced competitors? If yes, there's almost certainly a moat. Identify it before investing in attacking — or defending — it.`,
    },
  ],
  quiz: [
    { id: "q1", prompt: "Which is NOT one of Porter's five forces?", choices: ["Buyer power", "Threat of substitutes", "Government regulation", "Rivalry"], answerIndex: 2, explanation: "Regulation can affect forces but isn't itself one of the five." },
    { id: "q2", prompt: "A network effect is strongest in:", choices: ["A solo CRM tool", "A two-sided marketplace", "A commodity producer", "A discount airline"], answerIndex: 1, explanation: "Two-sided markets get more valuable to each side as the other grows." },
    { id: "q3", prompt: "Operational effectiveness differs from strategy in that:", choices: ["It's harder to copy", "It involves trade-offs", "It's about doing the same things better", "It requires more capital"], answerIndex: 2, explanation: "Strategy makes trade-offs; ops effectiveness improves the same activities and is easily replicated." },
  ],
  assignment: {
    id: "a1",
    title: "Five Forces analysis",
    prompt: "Pick an industry. Score each of the five forces (low/medium/high) with one specific piece of evidence each. Conclude with: (1) overall structural attractiveness, (2) which force is the binding constraint on profitability, (3) one strategic move a player could make to weaken that force.",
    rubric: "Specific evidence for each force (4 pts). Coherent attractiveness conclusion (2 pts). Identification of binding constraint (2 pts). Actionable strategic move (2 pts).",
  },
};